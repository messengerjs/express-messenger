const sinon = require('sinon')
const expect = require('chai').expect
const expressMessenger = require('../')
const request = require('supertest')

describe('express-messenger', function () {
  function createServer (options) {
    const app = require('express')()
    const messenger = expressMessenger(options)
    app.post('/',
      require('body-parser').json(),
      messenger
    )
    return { app, messenger }
  }

  function sendRequest (app) {
    return request(app)
      .post('/')
      .send({
        object: 'page',
        entry: [ { messaging: [{ text: 'hello' }] } ]
      })
  }

  it('returns HTTP 200 if Messenger messages have been processed', function () {
    const { app } = createServer()
    return sendRequest(app)
      .expect(200)
  })

  it('exposses a `use` function to add middleware', function () {
    const { app, messenger } = createServer()
    expect(messenger).to.have.property('use').instanceof(Function)

    const middlewareSpy = sinon.spy()
    messenger.use(middlewareSpy)

    return sendRequest(app)
      .expect(() => {
        expect(middlewareSpy.called).to.equal(true)
      })
  })

  it('adds an `http` context containing `req` and `res`', function () {
    const { app, messenger } = createServer()
    let testContext
    messenger.use(function (message, context) {
      testContext = context
    })

    return sendRequest(app)
      .expect(() => {
        expect(testContext).to.have.nested.property('http.res')
        expect(testContext).to.have.nested.property('http.req')
      })
  })

  it('continues to next middleware after processing the `req.body`', function () {
    const { app, messenger } = createServer()
    messenger.next()
    const middlewareSpy = sinon.spy(function (req, res, next) { next() })
    app.use(middlewareSpy)
    return request(app)
      .post('/')
      .send({})
      .expect(404)
      .expect(res => {
        expect(middlewareSpy.called).to.equal(true)
      })
  })
})

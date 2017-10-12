
const ProcessMessengerBody = require('messenger-core')

/**
 * + Handle Facebook Messenger messages
 * + handle JSON payloads in `postback` and `quick_reply` messages
 * + plugins
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * ## `options`
 */
module.exports = function (options) {
  let callNext = false
  const processMessengerBody = ProcessMessengerBody(options)
  const middleware = function expressMessengerMiddleware (req, res, next) {
    const context = { http: { req, res } }
    processMessengerBody(req.body, context)
      .then(function (result) {
        res.status(200)
        return callNext
          ? next()
          : res.end()
      })
      .catch(next)
  }
  middleware.use = processMessengerBody.use
  middleware.next = function () {
    callNext = true
  }

  return middleware
}

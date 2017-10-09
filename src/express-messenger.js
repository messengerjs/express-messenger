const ProcessMessengerBody = require('messenger-body')

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
  options = options || {}
  if (options.endRequest === undefined) options.endRequest = true
  const processMessengerBody = ProcessMessengerBody(options)
  const middleware = function expressMessengerMiddleware (req, res, next) {
    const context = { http: { req, res } }
    processMessengerBody(req.body, context)
      .then(function (result) {
        if (options.endRequest) return res.sendStatus(200)
        return next()
      })
  }
  middleware.use = processMessengerBody.use
  return middleware
}

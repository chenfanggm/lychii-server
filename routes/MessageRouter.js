var Router = require('express').Router()
var APIError = require('../utils/APIError')
var MessageService = require('../services/MessageService')

Router.get('/',
  function (req, res, next) {
    MessageService.getAllMessages()
      .then(function (messages) {
        res.json(messages)
      })
      .catch(function (error) {
        next(new APIError(error.msg))
      })
  })

module.exports = Router

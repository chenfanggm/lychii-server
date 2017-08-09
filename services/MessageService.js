var Promise = require('bluebird')
var Message = require('../models/MessageModel')

var getAllMessages = function () {
  return new Promise(function (resolve, reject) {
    return Message.find({})
      .exec()
      .then(function (messages) {
        if (messages) {
          resolve(messages)
        } else {
          reject('Don\'t get record')
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

module.exports = {
  getAllMessages: getAllMessages
}

var config = require('../config')
var MessageModel = require('../models/MessageModel')
var mongoose = require('mongoose')
var faker = require('faker')

mongoose.connect(config.mongo.uri, { server: { socketOptions: { keepAlive: 1 } } })
mongoose.connection.on('error', function () {
  throw new Error('Failed to connect to database:' + config.mongo.uri)
})

mongoose.connection.once('open', function () {
  for (var i = 0; i < 100; i++) {
    var message = faker.lorem.sentences()
    MessageModel.create({
      username: 'TwoOClockAm',
      payload: message
    })
  }
})

var mongoose = require('mongoose')
var moment = require('moment')

/**
 * Define
 */
var STATUS = {
    INACTIVE: 0,
    ACTIVE: 1
}

/**
 * Schema
 */
var MessageSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    payload: { type: String, required: true },
    status: { type: Number, required: true, default: STATUS.ACTIVE },
    createdAt: { type: Date, required: true, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updatedAt: { type: Date, required: true, default: moment().format('YYYY-MM-DD HH:mm:ss') }
})

var MessageModel = mongoose.model('Message', MessageSchema)
MessageModel.STATUS = STATUS

module.exports = MessageModel

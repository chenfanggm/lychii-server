const mongoose = require('mongoose')
const moment = require('moment')


const STATUS = {
    INACTIVE: 0,
    ACTIVE: 1
}

const MessageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    payload: { type: String, required: true },
    status: { type: Number, required: true, default: STATUS.ACTIVE },
    createdAt: { type: Date, required: true, default: moment().format('YYYY-MM-DD HH:mm:ss:SSS') },
    updatedAt: { type: Date, required: true, default: moment().format('YYYY-MM-DD HH:mm:ss:SSS') }
})

const MessageModel = mongoose.model('Message', MessageSchema)
MessageModel.STATUS = STATUS

module.exports = MessageModel

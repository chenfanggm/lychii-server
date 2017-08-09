var router = require('express').Router()
var UserRouter = require('./UserRouter')
var MessageRouter = require('./MessageRouter')


router.use('/user', UserRouter)
router.use('/message', MessageRouter)

router.use('/health', function (req, res) {
  res.json({
    message: 'OK'
  })
})

module.exports = router

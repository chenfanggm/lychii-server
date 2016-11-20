var router = require('express').Router()
var UserRouter = require('./UserRouter')

router.use('/user', UserRouter)

router.use('/health', function(req, res) {
  res.json({
    health: 'OK'
  })
})

module.exports = router

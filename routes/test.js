const Router = require('koa-router')
const router = new Router()

const test_controller = require('../app/controllers/test')

router.get('/test', test_controller.getData)

module.exports = router
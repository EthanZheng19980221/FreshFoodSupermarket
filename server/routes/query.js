const router = require('koa-router')()
const controllers = require('require-all')({
	dirname: 'D:/MyProjects/FreshFoodSuperMarket/server/controllers' 
})

router.prefix('/query')

router.get('/', controllers.goods.all)
router.get('/fruits', controllers.goods.fruits)
router.get('/vegetables', controllers.goods.vegetables)
router.get('/seafoods', controllers.goods.seafoods)
router.get('/meat', controllers.goods.meat)
router.get('/dairy', controllers.goods.dairy)
router.get('/address', controllers.user.address)
router.get('/order', controllers.admin.order)
//配送页面，显示状态为1的订单
router.get('/delivery', controllers.admin.delivery)
module.exports = router

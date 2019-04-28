const router = require('koa-router')()
const controllers = require('require-all')({
	dirname: 'D:/MyProjects/FreshFoodSuperMarket/server/controllers' 
})

//配送人员接单后,订单状态改为1
router.post('/takeorder', controllers.admin.takeorder)

module.exports = router
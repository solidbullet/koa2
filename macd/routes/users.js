const router = require('koa-router')()
const db = require('../crud')
var Macd = require('../models/macd.model');

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

router.get('/', async (ctx, next) => {
  await ctx.render('show', {
    title: 'MACD金叉死叉数据库系统'
  })
})

router.get('/get24hour', async (ctx, next) => {
  let res = await db.get24hour(24);
  ctx.body = res;
})

module.exports = router

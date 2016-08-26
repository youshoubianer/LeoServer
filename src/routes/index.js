'use strict';

const Router = require('koa-router')
var mainRouter = new Router();
const leoRouter = require('./leoRouter')(mainRouter)

mainRouter.use('/leo',leoRouter.routes())

mainRouter.get('/',function*(){
  this.response.body = 'Hello World!';
})

module.exports = mainRouter

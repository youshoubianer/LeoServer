'use strict';

const Router = require('koa-router')
var mainRouter = new Router();
const libRouter = require('./libRouter')
const blogRouter = require('./blogRouter')


mainRouter.use('/leo/blog',blogRouter.routes())
mainRouter.use('/leo/library',libRouter.routes())

mainRouter.get('/',function*(next){
  this.response.body = 'here is the home page';
})

module.exports = mainRouter

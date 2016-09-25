'use strict';

const base = require('../api_service/base')
const koaBody = require('koa-body')({jsonLimit:'100mb',formLimit:'100mb',textLimit: '100mb'})

function routes(router){
  //blog routers
  router.get('/leo/blog/articleList', koaBody, base.getArticleList)
  router.get('/leo/blog/article/:id', koaBody, base.getAticleById)
  router.post('/leo/blog/editArticle', koaBody, base.editArticle)
  
  //tags
  router.get('/leo/tags/getTagList',koaBody,base.getTags)
  router.post('/leo/tags/newTag',koaBody,base.newTag)
  
  //discussions
  router.get('/leo/discussions/:articleId',koaBody,base.getDiscussion)
  router.post('/leo/discussions/newDiscussion',koaBody,base.newDiscussion)
  
  //library routers
  router.get('/leo/library',base.libraryIndex)
}

module.exports = routes
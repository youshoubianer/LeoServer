'use strict';

var router = require('koa-router')()

router.get('/aa', function *(next) {
  this.response.body = 'the router to list articles';
});
    
router.get('/dd', function *(next) {
    this.response.body = 'get idth article';
});

module.exports = router
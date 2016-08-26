'use strict';

var router = require('koa-router')()

router.get('/bb', function *(next) {
  this.response.body = 'all lib is here';
});
    
router.get('/cc', function *(next) {
      this.response.body = 'show the lib by name';
});

module.exports = router
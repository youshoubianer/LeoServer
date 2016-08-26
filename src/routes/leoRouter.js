'use strict';

module.exports = function(router){
  router.get('/aa', function *(next) {
    this.response.body = 'Hello World aaaaa!';
  });
    
  router.get('/404', function *(next) {
      this.response.body = 'page not found 404!';
  });
  
  return router
}
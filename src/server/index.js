'use strict'

const config = require('../common/config')

// 实例化
const app = require('koa')()
const logger = require('koa-logger')
const routes = require('../routes')
var router = require('koa-router')()


app.use(logger())

app.use(function *(next){
  try {
    yield next
    if (this.data != null) {
        if (!this.headerSent && !this.body) this.body = {
            code: 0,
            data: this.data
        };
    } else {
        if (!this.headerSent && !this.body) this.throw(500, 'No data responsed from controller');
    }
  }
  catch (err) {
      this.status = err.status || 500;
      this.body = {
          code: err.status || 500,
          msg: err.message || 'Cannot get err.message'
      };
  }
})


//routes
routes(router)
app.use(router.routes()).use(router.allowedMethods())


// 错误捕获
process.on('uncaughtException', err => {
  log.error('Global Error:');
  log.error(err.stack);
  process.exit(0);
});

// 启动监听
app.listen(config.port);
// log.info(`${config.name} server start: ${config.port}`);

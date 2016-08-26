'use strict'

const config = require('../common/config')

// 实例化
const app = require('koa')()
const router = require('../routes')

app.use(router.routes());

// 错误捕获
// process.on('uncaughtException', err => {
//   log.error('Global Error:');
//   log.error(err.stack);
//   process.exit(0);
// });

// 启动监听
app.listen(config.port);
// log.info(`${config.name} server start: ${config.port}`);

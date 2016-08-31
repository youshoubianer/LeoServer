'use strict';

// 配置文件
module.exports = {
    // 项目名
    name: 'LeoServer',

    // 监听端口
    port: 9001,
    
    // 本地调试
    localDebug: true,
    
    //数据库
    db:{
      host: 'localhost',
      port: 3306,
      database: 'leo',
      username: 'leo',
      password: 'leo',
      pool: 10,
      dialect: 'mysql',
      logging: console.log,
    }
}
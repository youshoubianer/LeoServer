'use strict'
const Sequelize = require('sequelize')
const config = require('./config')

module.exports = new Sequelize(config.db.database, config.db.username, config.db.password, {
  dialect: config.db.dialect,
  host: config.db.host,
  port: config.db.port,
  timezone: '+08:00',
  pool: {
    maxConnections: config.db.pool,
  },
  omitNull: false,
  logging: config.db.logging,
  option:{
    logging: config.db.logging,
  },
  define: {
    timestamps: false,
  }
});
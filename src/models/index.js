'use strict';

const fs = require('fs')
const path = require('path')

const sequelize = require('../common/db')

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf('.') !== 0 && file !== 'index.js'
  })
  .forEach(function(file) {
    var model = sequelize.import(__dirname+'/' + file)
    module.exports[model.name] = model
  })

module.exports.sequelize = sequelize
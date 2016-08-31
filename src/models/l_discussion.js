/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l_discussion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reIds: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'l_discussion'
  });
};

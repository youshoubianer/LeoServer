/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l_tags', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tagName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'l_tags'
  });
};

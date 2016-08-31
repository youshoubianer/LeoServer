/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l_articleDiscussion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    articleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    discussID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'l_articleDiscussion'
  });
};

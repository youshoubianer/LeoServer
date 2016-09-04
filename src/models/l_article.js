/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('l_article', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tagIds: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '[]'
    },
    lockMsg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    views: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'l_article'
  });
};

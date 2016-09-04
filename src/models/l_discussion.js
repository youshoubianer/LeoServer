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
    replyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    articleId: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'l_discussion'
  });
};

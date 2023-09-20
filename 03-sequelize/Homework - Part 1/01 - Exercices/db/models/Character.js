const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.STRING,
         primaryKey: true,
         validate: {
            len: [5],
            not: /^[henry]/i
         }
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         validate: {
            notContains: 'Henry'
         }
      },
      age: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      race: {
         type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
         defaultValue: 'Other'
      },
      hp: {
         type: DataTypes.FLOAT,
         allowNull: false
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: false
      }}, {
         timestamps: false,
      }
   );
};

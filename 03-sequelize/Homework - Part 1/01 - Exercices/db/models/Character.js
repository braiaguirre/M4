const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         validate: {
            len: [5]
         }
      },
      name: {
         type: DataTypes.STRING,
         unique: true
      },
      age: {
         type: DataTypes.INTEGER
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
         timestamps: false
      }
   );
};

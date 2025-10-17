// models/taskModel.js

import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  process.env.POSTGRES_URI || 'postgres://usuario:senha@localhost:5432/todos_db',
  {
    dialect: 'postgres',
    logging: false,
  }
);

const ToDo = sequelize.define('ToDo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  status: {
    type: DataTypes.ENUM('pendente', 'concluída'),
    defaultValue: 'pendente',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: false,
  tableName: 'todos'
});

export { sequelize, ToDo };

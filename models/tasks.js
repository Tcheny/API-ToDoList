// Interface entre express et mondodb
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String },
  completed: { type: Boolean }
});

// création du model 'Task' qui est relié a la collection "tasks" de MGDB
module.exports = mongoose.model('Task', taskSchema);

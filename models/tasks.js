//Permet d'aller dans la DB
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String },
  completed: { type: Boolean }
});

// création du model 'Task'
module.exports = mongoose.model('Task', taskSchema);

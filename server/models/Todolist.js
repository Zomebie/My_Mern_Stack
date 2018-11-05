const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
  todolist:String
});

module.exports = mongoose.model('TodoList', TodoListSchema);

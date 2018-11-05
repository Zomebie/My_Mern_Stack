const TodoList = require('../../models/Todolist');// models에서 스키마를 가져옴

// REST ful API를 이용해 라우터 작성
module.exports = (app) =>{

  app.put('/api/todo-lists/:input', (req, res, next) => {

    const list = new TodoList();

    list.todolist=`${req.params.input}`;

        list.save()
          .then(() => res.json(list))
          .catch((err) => next(err));

  });

  app.get('/api/todo-lists', (req,res,next)=>{

    TodoList.find()
    .exec()
    .then((list)=> res.json(list))
    .catch((err) => next(err));
  }); //이게 아마 데이터 베이스 값을 가져오는것같고

  app.delete('/api/todo-lists/:id' , function(req,res,next){
    TodoList.findOneAndRemove({_id: req.params.id})
    .exec()
    .then((list) => res.json())
    .catch((err) => next(err));
  });


};

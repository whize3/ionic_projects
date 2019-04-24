var express = require('express');
var router = express.Router();

var Todo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕 express' })
});

router.get('/todos', function(req, res, next) {
  console.log('get /todos call!')
  //{} where 절이 없는것
  Todo.find({}, function(err, todos){
    if(err){
      return res.json({"success":false, "msg":"Error while retrieving Todos", "error": err})
    }
    console.log("todos===", todos)
    res.status(200).send(todos)
  }) 
});

router.post('/todos', (req, res, next) => {
  console.log('post /todos call!')
  if(! req.body.text){
    return res.status(400).send({"success":false, "msg":"You need to send the text of the todo"})
  }
  var newTodo = new Todo({
    text: req.body.text
  })
  newTodo.save((err) => {
    if(err){
      console.log('err===', err)
      return res.json({"success":false, "msg":"Error while creating Todos", "error": err})
    }
    res.send({"success":true, "msg":"Successful creating new Todo"})
  })
})

router.delete('/todos/:todoId', (req, res) => {
  var lectionId = req.params.todoId // _id : 5cbfbac7e0341d1eec842e43
  if(! lectionId || lectionId === ""){
    return res.json({"success":false, "msg":"You need to send ID of the Todo!"})
  }
  Todo.findByIdAndRemove(lectionId, (err, removed) => {
    if(err){
      console.log('err===', err)
      return res.json({"success":false, "msg":"Error while removing Todos"})
    }
    res.send({"success":true, "msg":"Successful deleting new Todo"})
  })
})

module.exports = router;

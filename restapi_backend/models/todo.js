var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TodoSchema = new Schema({
    //RDB로 치면 Column
   text: {
       type: String,
       required: true
   },
   create_at: Date 
})

//저장하기전 전 처리 
TodoSchema.pre('save', function(next){
    var todo = this
    var currentDate = new Date()
    if(!todo.create_at){
        todo.create_at = currentDate
    }
    //next를 꼭 호출해줘야한다
    next()
})
module.exports = mongoose.model('Todo', TodoSchema)
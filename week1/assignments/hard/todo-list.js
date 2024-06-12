/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
let list = [];
class Todo {


  add(todo){
    list.push(todo)
  }

  remove(index){
    list.splice(index, 1);
  }

  update(index, newTodo){
    list[index]=newTodo;
  }

  getAll(){
    return list
  }

  get(index){
    return list[index]
  }

  clear(){
    list = []
  }

}

module.exports = Todo;

let todos = {


  /* TODO LIST - Global scope
  -------------------------------*/
  todoList: [

    {
      text: "Go shopping", //todoList[0].text
      completed: false
    },

    {
      text: "Buy tobacco", //todoList[0].text
      completed: false
    },

    {
      text: "Do this", //todoList[0].text
      completed: false
    },

    {
      text: "Do that", //todoList[0].text
      completed: false
    }

  ],


  /* DISPLAY TODOS
  -------------------------------*/
  displayTodos: function() {
    console.log(this.todoList);
  },


  /* ADD TODO
  -------------------------------*/
  addTodo: function(newText, newCompleted = false) {

    this.todoList.push({
      text: newText,
      completed: newCompleted
    });

    this.displayTodos();
  },


  /* CHANGE A TODO
  -------------------------------*/
  changeTodo: function(index, text) {

    this.todoList[index] = text;
    
    this.displayTodos();

  },


  /* DELETE A TODO
  -------------------------------*/
  deleteTodo: function(index, numberToDelete = 1) {

    this.todoList.splice(index, numberToDelete);
    this.displayTodos();

  }


}


show(todos.todoList, "My list");




























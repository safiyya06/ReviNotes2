

var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    addedNotes:"" 
},
created: function() {
  if (localStorage.getItem("todos")){
      this.todos = JSON.parse(localStorage.getItem("todos"));
  }
},
  methods:{
      addNotes: function (){
          const addedNotes = {
              name: this.newaddedNotes,
              isDone: false
          };
          this.todos.unshift(newTodo);
          this.newTodoName = "";
          this.persistData();
},
  deleteTodo: function(index) {
      this.todos.splice(index, 1);
      this.persistData();
},
  toggleDone: function(index) {
      this.todos[index].isDone = !this.todos[index].isDone;
      this.persistData();
},
  
  persistData: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
  },
},
});

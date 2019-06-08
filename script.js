  // Code goes here

  var todosList = {
    todos: [],
    displayTodos: function() {
      if (this.todos.length === 0) {
        console.log('There are no TODOS');
      } else {
        console.log('My Todos')
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
            console.log('(x) ' + this.todos[i].todosText);
          } else {
            console.log('( ) ' + this.todos[i].todosText)
          }
        }
      }

    },
    addTodos: function(todosText) {
      this.todos.push({
        todosText: todosText,
        completed: false
      });
      this.displayTodos();
    },

    changeTodos: function(todosText, index) {
      this.todos[index].todosText = todosText;
      this.displayTodos();
    },

    deleteTodos: function(index) {
      this.todos.splice(index, 1);
      this.displayTodos();
    },

    toggleCompleted: function(index) {
      var todo = this.todos[index];
      todo.completed = !todo.completed;
      this.displayTodos();
    },

    toggleAll: function() {
      var completedTodos = 0;
      var totalTodos = this.todos.length;
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
      for (var i = 0; i < totalTodos; i++)
        if (completedTodos === totalTodos) {
          this.todos[i].completed = false;
        } else {
          this.todos[i].completed = true;
        }
      this.displayTodos();
    }
  };

  //handler object

  var handlers = {
    displayTodos: function() {
      todosList.displayTodos();
    },

    addTodos: function() {
      var todoText = document.getElementById('addTodoText');
      todosList.addTodos(todoText.value);
      todoText.value = '';
      views.displayTodos();
    },

    deleteTodos: function() {
      var deleteIndex = document.getElementById('deleteIndex');
      todosList.deleteTodos(deleteIndex.valueAsNumber);
      deleteIndex.value = '';
      views.displayTodos();
    },

    changeTodos: function() {
      var index = document.getElementById('changeIndex');
      var text = document.getElementById('changeText');
      todosList.changeTodos(changeText.value, changeIndex.valueAsNumber);
      changeText.value = '';
      changeIndex.value = '';
      views.displayTodos();
    },

    toggleAll: function() {
      todosList.toggleAll();
      views.displayTodos();
    },
    toggleCompleted: function() {
      var toggleIndex = document.getElementById('toggleIndex');
      todosList.toggleCompleted(toggleIndex.valueAsNumber);
      toggleIndex.value = '';
      views.displayTodos();
    }
  };

  // Ul and li tags dynamically.

  var views = {
    displayTodos: function() {
      var todosUi = document.querySelector('ul');
      todosUi.innerHTML = '';
      for (var i = 0; i < todosList.todos.length; i++) {

        var todosli = document.createElement('li');
        var todo = todosList.todos[i];
        var todoTextWithCompletion = '';

        if (todo.completed === true) {
          todoTextWithCompletion = "(x) " + todo.todosText;
        } else {
          todoTextWithCompletion = "( ) " + todo.todosText;
        }

        todosli.textContent = todoTextWithCompletion;
        todosUi.appendChild(todosli);
      }

    }


  };
document.addEventListener('DOMContentLoaded',()=>{
      const todoform = document.getElementById('todo-form');
      const todoinput = document.getElementById('todo-input');
      const todolist = document.getElementById('todo-list');

      //adding a new to-do item
      todoform.addEventListener('submit',(event)=>{
        event.preventDefault();

        const newTodoText = todoInput.value.trim();

      if(newTodoText!==""){
        const newTodoItem = document.createElement('li');
        newTodoItem.innerHTML= 
        <button>Complete</button>

      }

      })

})
import TodoItem from './properties'
const addToDoForm = (() => {

  const todoForm = (()=> {
    const todoContainer = document.getElementById('todo-form');
    const todoForm = document.createElement('form');
    todoForm.innerHTML = `
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title" required><br>
        <label for="description">Description:</label><br>
        <input type="text" id="description" name="description" required><br>
        <label for="duedate">Due Date:</label><br>
        <input type="date" id="duedate" name="duedate" required><br>
        <label for="priority">Priority:</label><br>
        <select name="priority" id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select><br>
        <input type="submit" value="Add" id = 'submit' onsubmit='test(); return false;'></input>
    `;
    todoContainer.appendChild(todoForm);
    return todoForm;
  });

  const hideForm = (() => {
    document.getElementById('todo-form').style.display = 'none';
  });

  const test = ((e) => {
    e.preventDefault();
    console.log("Hello");
  })

  return { hideForm, todoForm, test };
})();

export default addToDoForm;


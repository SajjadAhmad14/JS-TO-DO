import Projects from './project';
import items from './toDoItems';

const addToDoForm = (() => {
  const todoForm = (() => {
    const todoContainer = document.getElementById('todo-form');
    const todoForm = document.createElement('form');
    todoForm.innerHTML = `
        <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" class="form-control" required><br>
        </div>
        <div class="form-group"> 
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" class="form-control" required><br>
        </div>
        <div class="form-group">
        <label for="duedate">Due Date:</label>
        <input type="date" id="duedate" name="duedate" class="form-control" required><br>
        </div>
        <div class="form-group">
        <label for="priority">Priority:</label>
        <select name="priority" id="priority" class="form-control">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select><br>
        </div>
        <label for="project">Project:</label>
    `;
    const select = document.createElement('select');
    select.setAttribute('id', 'project');
    select.setAttribute('name', 'project');
    select.setAttribute('class', 'form-control');
    for (let i = 0; i < Projects.length; i += 1) {
      const option = document.createElement('option');
      option.value = Projects[i].title;
      option.textContent = Projects[i].title;
      select.appendChild(option);
    }
    todoForm.appendChild(select);
    const br = document.createElement('br');
    todoForm.appendChild(br);
    const submitBtn = document.createElement('INPUT');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('btn', 'btn-primary');
    todoForm.appendChild(submitBtn);
    const cancelBtn = document.createElement('input');
    cancelBtn.setAttribute('id', 'canceltodo-form');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('btn', 'btn-light');
    cancelBtn.setAttribute('value', 'Cancel');
    todoForm.appendChild(cancelBtn);
    todoContainer.appendChild(todoForm);
    return todoForm;
  });

  const hideForm = (() => {
    document.getElementById('todo-form').style.display = 'none';
  });

  return {
    hideForm, todoForm};
})();
export default addToDoForm;
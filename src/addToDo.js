import TodoItem from './properties'
import Projects from './project';
import Project from './addProject';
import items from './toDoItems.js';


const addToDoForm = (() => {

  const todoForm = (()=> {
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
    for (let i = 0; i < Projects.length; i++) {
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
    submitBtn.classList.add('btn','btn-primary');
    todoForm.appendChild(submitBtn);
    todoContainer.appendChild(todoForm);
    return todoForm;

  });

  const itemProject = ((item) => {
    const project = item.project;
    for(let i=0; i<Projects.length; i++) {
      if(Projects[i].title === project) {
        Projects[i].items.push(item);
      }
    }
  });

  const hideForm = (() => {
    document.getElementById('todo-form').style.display = 'none';
  });

  const addList = () => {
    const todoitemDiv = document.getElementById('todo-items');
    if(items.length === 1) {
      const table = document.createElement('table');
      table.setAttribute('class', 'table');
      const thead = document.createElement('thead')
      const tr = document.createElement('tr');
      tr.setAttribute('class','todo-row');
      const th1 = document.createElement('th');
      th1.textContent = 'Title';
      const th2 = document.createElement('th');
      th2.textContent = 'Description';
      const th3 = document.createElement('th');
      th3.textContent = 'Due Date';
      const th4 = document.createElement('th');
      th4.textContent = 'Priority';
      const th5 = document.createElement('th');
      th5.textContent = 'Project';

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tr.appendChild(th5);
      thead.appendChild(tr);
      table.appendChild(thead);
      todoitemDiv.appendChild(table);
    }
    const tbody = document.createElement('tbody');
    const row = document.createElement('tr');
    for(let i=0; i<items.length; i++) {
      
      row.innerHTML = `
      <td class="mx-4">${items[i].title}</td>
      <td class="mx-4">${items[i].description}</td>
      <td class="mx-4">${items[i].dueDate}</td>
      <td class="mx-4">${items[i].priority}</td>
      <td class="mx-4">${items[i].project}</td>
      `;
      tbody.appendChild(row);
    }
    
    todoitemDiv.appendChild(tbody);

  };


  return { hideForm, todoForm, itemProject, addList};
})();

export default addToDoForm;


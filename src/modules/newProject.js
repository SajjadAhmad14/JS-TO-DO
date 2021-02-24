import Projects from './project';
import Store from './localStorage';

const ProjectForm = (() => {
  const showForm = (() => {
    document.getElementById('form').style.display = 'block';
  });

  const hideForm = (() => {
    document.getElementById('form').style.display = 'none';
  });

  const projectItemsTable = ((projectItemsArray, project, index) => {
    const tbleBody = document.getElementById('table-body');

    const row = document.createElement('tr');
    row.setAttribute('class', 'table-row');
    const td0 = document.createElement('td');
    td0.textContent = index + 1;
    const td1 = document.createElement('td');
    td1.textContent = project;
    const td2 = document.createElement('td');
    td2.textContent = projectItemsArray.title;
    const tddescr = document.createElement('td');
    tddescr.textContent = projectItemsArray.description;
    const td3 = document.createElement('td');
    td3.textContent = projectItemsArray.dueDate;
    const tdpriority = document.createElement('td');
    tdpriority.textContent = projectItemsArray.priority;
    const td4 = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    editBtn.classList.add('btn', 'btn-success');
    editBtn.setAttribute('type', 'button');
    td4.appendChild(editBtn);
    const td5 = document.createElement('td');
    td5.setAttribute('id', 'delete-list');
    const dltBtn = document.createElement('button');
    dltBtn.textContent = 'X';
    dltBtn.classList.add('btn', 'btn-danger');
    dltBtn.setAttribute('type', 'button');
    td5.appendChild(dltBtn);

    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(tddescr);
    row.appendChild(td3);
    row.appendChild(tdpriority);
    row.appendChild(td4);
    row.appendChild(td5);
    tbleBody.appendChild(row);
  });

  const projectTodo = ((e) => {
    (() => {
      document.querySelectorAll('.table-row').forEach(row => row.remove());
    })();
    const items = Store.getTodo();

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].project === e.target.textContent) {
        projectItemsTable(items[i], items[i].project, i);
      }
    }
  });

  const viewAllProject = (() => {
    const projectList = document.getElementById('all-projects');
    for (let i = 0; i < Projects.length; i += 1) {
      const h2 = document.createElement('h2');
      h2.classList.add('project-list');
      const anchor = document.createElement('a');
      anchor.setAttribute('class', 'project-link');
      anchor.textContent = Projects[i].title;
      h2.appendChild(anchor);
      projectList.appendChild(h2);
    }

    const al = document.querySelector('#all-projects');
    al.addEventListener('click', projectTodo);
  });

  const allSiblings = function (elem) {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  };

  const editFormFields = ((project, title, description, duedate, priority) => {
    const editTitle = document.getElementById('title');
    editTitle.value = title;
    const editDesc = document.getElementById('description');
    editDesc.value = description;
    const editDueDate = document.getElementById('duedate');
    editDueDate.value = duedate;
    const editPriority = document.getElementById('priority');
    editPriority.value = priority;
  });

  const editToDoForm = (projectName, TaskTitle, description, dueDate, priority) => {
    const editForm = document.createElement('form');
    editForm.setAttribute('id', 'taks-edit-form');
    editForm.classList.add('editToDoForm', 'w-50', 'm-auto');
    editForm.innerHTML = `
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
    editForm.appendChild(select);
    const br = document.createElement('br');
    editForm.appendChild(br);
    const submitBtn = document.createElement('INPUT');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('btn', 'btn-primary');
    const cancelBtn = document.createElement('INPUT');
    cancelBtn.setAttribute('value', 'Cancel');
    cancelBtn.setAttribute('id', 'cancel');
    cancelBtn.setAttribute('type', 'submit');
    cancelBtn.classList.add('btn', 'btn-danger');
    editForm.appendChild(submitBtn);
    editForm.appendChild(cancelBtn);
    const taskArea = document.getElementsByClassName('task-area')[0];
    taskArea.lastChild.remove();
    taskArea.appendChild(editForm);
    editFormFields(projectName, TaskTitle, description, dueDate, priority);
  };

  const editTaskList = (form, index) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const duedate = document.getElementById('duedate').value;
      const priority = document.getElementById('priority').value;
      const project = document.getElementById('project').value;
      Store.editToDo(title, description, duedate, priority, project, index);
      form.reset();
    });
  };

  const todoContainer = document.getElementById('todo-table');
  todoContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const ele = e.target;
    if (ele.classList.contains('btn-danger')) {
      ele.parentElement.parentElement.remove();
      const elem = ele.parentElement.parentElement.lastChild;
      const siblings = allSiblings(elem);
      const projectTitle = siblings[1].textContent;
      for (let i = 0; i < Projects.length; i += 1) {
        if (projectTitle === Projects[i].title) {
          Store.removeTodo(projectTitle);
        }
      }
    }
    if (ele.classList.contains('btn-success')) {
      const elem = ele.parentElement.parentElement.firstChild;
      const index = (elem.textContent) - 1;
      const siblings = allSiblings(elem);
      const projectName = siblings[0].textContent;
      const taskTitle = siblings[1].textContent;
      const taskDescription = siblings[2].textContent;
      const dueDate = siblings[3].textContent;
      const priority = siblings[4].textContent;
      editToDoForm(projectName, taskTitle, taskDescription, dueDate, priority);
      const form = document.getElementById('taks-edit-form');
      editTaskList(form, index);
    }
  });

  return { showForm, hideForm, viewAllProject };
})();


export default ProjectForm;

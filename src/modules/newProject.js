import Projects from './project';
import Store from './localStorage';

const ProjectForm = (() => {
  const showForm = (() => {
    document.getElementById('form').style.display = 'block';
  });

  const hideForm = (() => {
    document.getElementById('form').style.display = 'none';
  });

  const projectItemsTable = ((projectItemsArray, project) => {
    const tbleBody = document.getElementById('table-body');
    for (let i = 0; i < projectItemsArray.length; i += 1) {
      const row = document.createElement('tr');
      row.setAttribute('class', 'table-row');
      const td0 = document.createElement('td');
      td0.textContent = i + 1;
      const td1 = document.createElement('td');
      td1.textContent = project.title;
      const td2 = document.createElement('td');
      td2.textContent = projectItemsArray[i].title;
      const tddescr = document.createElement('td');
      tddescr.textContent = projectItemsArray[i].description;
      const td3 = document.createElement('td');
      td3.textContent = projectItemsArray[i].dueDate;
      const tdpriority = document.createElement('td');
      tdpriority.textContent = projectItemsArray[i].priority;
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
    }
  });

  const projectTodo = ((e) => {
    (() => {
      document.querySelectorAll('.table-row').forEach(row => row.remove());
    })();
    const alltodos = Store.getTodo();
    const projectTodoList = [];
    for (let i = 0; i < alltodos.length; i += 1) {
      if (alltodos[i].project === e.target.textContent) {
        projectTodoList.push(alltodos[i]);
      }
    }

    for (let i = 0; i < Projects.length; i += 1) {
      if (Projects[i].title === e.target.textContent) {
        projectItemsTable(projectTodoList, Projects[i]);
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

  const editToDoForm = (project, title, description, duedate, priority) => {
    const editForm = document.createElement('form');
    editForm.classList.add('editToDoForm', 'w-50');
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
    editFormFields(project, title, description, duedate, priority);
  };

  const todoContainer = document.getElementById('todo-table');
  todoContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const ele = e.target;
    if (ele.classList.contains('btn-danger')) {
      ele.parentElement.parentElement.remove();
      // let index = ele.parentElement.parentElement.firstChild.textContent;
      // index = Number(index);
      const elem = ele.parentElement.parentElement.lastChild;
      const siblings = allSiblings(elem);
      const title = siblings[1].textContent;
      for (let i = 0; i < Projects.length; i += 1) {
        if (title === Projects[i].title) {
          Store.removeTodo(title);
        }
      }
    } else {
      const row = ele.parentElement.parentElement.parentElement;
      const rowElements = row.children;
      const project = rowElements[1].textContent;
      const title = rowElements[2].textContent;
      const description = rowElements[3].textContent;
      const duedate = rowElements[4].textContent;
      const priority = rowElements[5].textContent;
      console.log(project, title, description, duedate, priority);
      editToDoForm(project, title, description, duedate, priority);
    }
  });

  return { showForm, hideForm, viewAllProject };
})();


export default ProjectForm;

import Projects from './project.js';
import clearContent from './index.js';

const ProjectForm = (() => {

  const showForm = (() => {
    document.getElementById('form').style.display = 'block';
  });

  const hideForm = (() => {
    document.getElementById('form').style.display = 'none';
  });

  const viewAllProject = (() => {
    const projectContainer = document.querySelector('.project-container');
    const projectList = document.getElementById('all-projects');
    for (let i = 0; i < Projects.length; i++) {
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

  const projectTodo = ((e) => {
    const clearPrevList = (() => {
      document.querySelectorAll('.table-row').forEach(row => row.remove());
    })();
    let x = e.target.textContent;
    let test = x.textContent;
    for (let i = 0; i < Projects.length; i++) {
      if (Projects[i].title === e.target.textContent) {
        projectItemsTable(Projects[i].items);
      }
    }
  });

  const projectItemsTable = ((projectItemsArray) => {
    const table = document.getElementById('todo-table');
    const tbleBody = document.getElementById('table-body');
    for (let i = 0; i < projectItemsArray.length; i++) {
      const row = document.createElement('tr');
      row.setAttribute('class', 'table-row');
      const td1 = document.createElement('td');
      td1.textContent = projectItemsArray[i].title
      const td2 = document.createElement('td');
      td2.textContent = projectItemsArray[i].dueDate
      const td3 = document.createElement('td');
      const editBtn = document.createElement('button');
      editBtn.innerHTML =`<i class="fa fa-pencil-square-o" aria-hidden="true"></i>`;
      editBtn.classList.add('btn', 'btn-success');
      editBtn.setAttribute('type','button');
      td3.appendChild(editBtn);
      const td4 = document.createElement('td');
      const dltBtn = document.createElement('button');
      dltBtn.textContent = 'X';
      dltBtn.classList.add('btn','btn-danger');
      dltBtn.setAttribute('type','button');
      td4.appendChild(dltBtn);

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      tbleBody.appendChild(row);

    }

    const todoContainer = document.getElementById('todo-table');
    todoContainer.addEventListener('click', deleteTodo);

  });

  const deleteTodo = ((e) => {
    let ele = e.target;
    console.log(ele);
    console.log(ele.parentElement.parentElement.parentElement);
    if(ele.classList.contains('btn-danger')) {
      ele.parentElement.parentElement.parentElement.remove();
    }
  })
  
  const showTasks = (item, h2) => {
    const listContainer = document.createElement('div');
    listContainer.classList.add('todo-list');
    for (let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.textContent = item[i].title;
      listContainer.appendChild(div);
    }
    h2.appendChild(listContainer);
  };

  return { showForm, hideForm, viewAllProject };

})();



export default ProjectForm;

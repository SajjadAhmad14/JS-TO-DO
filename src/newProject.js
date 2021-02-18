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
      row.appendChild(td1);
      row.appendChild(td2);
      tbleBody.appendChild(row);
    }
  });
  
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

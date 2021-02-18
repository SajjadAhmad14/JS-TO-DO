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
    for(let i=0; i<Projects.length; i++) {
      const h2 = document.createElement('h2');
      h2.classList.add('project-list');
      const anchor = document.createElement('a');
      anchor.setAttribute('class','project-link');
      anchor.textContent = Projects[i].title;
      h2.appendChild(anchor);
      projectList.appendChild(h2);
    }
   
    const al = document.querySelector('#all-projects');
    al.addEventListener('click', projectTodo);
    clearProjectList('#all-projects');
  });

  const projectTodo = ((e) => {
    
    let x = e.target.textContent;
    let test = x.textContent;
    for(let i=0; i<Projects.length; i++) {
      if(Projects[i].title === e.target.textContent) {
        console.log(Projects[i].items);
        projectItemsTable(Projects[i].items);
      }
    }
  });

  const projectItemsTable = ((projectItemsArray) => {

    const container = document.getElementById('projetc-items');
    
    if(projectItemsArray.length === 1) {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tr = document.createElement('tr');
      const th1 = document.createElement('th');
      th1.setAttribute('scope', 'col');
      th1.textContent = '#';
      const th2 = document.createElement('th');
      th2.setAttribute('scope', 'col');
      th2.textContent = 'Title';
      const th3 = document.createElement('th');
      th3.setAttribute('scope', 'col');
      th3.textContent ='Due Date';

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      thead.appendChild(tr);
      table.appendChild(thead);
      container.appendChild(table);
    }
    // else if(projectItemsArray.length === 0) {
    //   alert('No items!')
    // }

    const tbody = document.createElement('tbody');
    const row = document.createElement('tr');

    for(let i=0; i<projectItemsArray.length; i++) {
      row.innerHTML = `
      <td class="mx-4">${i+1}</td>
      <td class="mx-4">${projectItemsArray[i].title}</td>
      <td class="mx-4">${projectItemsArray[i].dueDate}</td>
      `;
      
    }
    tbody.appendChild(row); 
    container.appendChild(tbody);
  });

  const showTasks = (item, h2) => {
    const listContainer = document.createElement('div');
    listContainer.classList.add('todo-list');
    for(let i = 0; i < item.length; i++) {
      const div = document.createElement('div');
      div.textContent = item[i].title;
      listContainer.appendChild(div);
    }
    h2.appendChild(listContainer);
  };

    return { showForm, hideForm, viewAllProject };

})();



export default ProjectForm;

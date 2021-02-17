import Projects from './project.js';
import clearContent from './index.js'

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
      h2.textContent = Projects[i].title;
      projectList.appendChild(h2);
    }
    const items = document.getElementsByClassName('project-list');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        console.log()
      })
    }
    // h2.addEventListener('click', () => {
    //   showTasks(Projects[i].items, h2);
    // });
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

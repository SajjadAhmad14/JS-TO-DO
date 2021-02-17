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

  });

    return { showForm, hideForm, viewAllProject };

})();



export default ProjectForm;

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
    const projectList = document.createElement('div');
    for(let i=0; i<Projects.length; i++) {
      // ptitle.textContent = Projects[i].title;
      const h2 = document.createElement('h2');
      h2.textContent = Projects[i].title;
      projectList.appendChild(h2);
    }
    projectContainer.appendChild(projectList);
  });

    return { showForm, hideForm, viewAllProject };
})();



export default ProjectForm;

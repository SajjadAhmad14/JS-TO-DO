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
    const main = document.getElementById('main-container');
    const ptitle = document.createElement('h1');
    for(let i=0; i<Projects.length; i++) {
      ptitle.textContent = Projects[i].title;
    }
    main.appendChild(ptitle);
  });

    return { showForm, hideForm, viewAllProject };
})();



export default ProjectForm;

import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';
import Project from './addProject';
import Projects from './project.js';

window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);

//selectors
const addSign = document.querySelector('#add-project');
const form = document.getElementById('form');
const viewProjectBtn = document.getElementById('view-project');

//functions
const clearContent = () => {
  const content = document.getElementById("project-content");
  document.querySelectorAll('.card-1').forEach(card => card.remove());
};

//event listners

addSign.addEventListener('click', () => {
  clearContent();
  ProjectForm.showForm();
});

form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('project-title').value;
      const project = new Project(title);
      Projects.push(project); 
      document.getElementById('form').reset();
      clearContent();
      ProjectForm.viewAllProject();
      // ProjectForm.hideForm();
});

viewProjectBtn.addEventListener('click', () => {
  // clearContent();
  // ProjectForm.viewAllProject();
});
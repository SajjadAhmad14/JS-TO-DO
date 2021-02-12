import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';
import Project from './addProject';

window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);

//selectors
const addSign = document.querySelector('#add-project');
const form = document.getElementById('form');

//functions
const clearContent = () => {
  const content = document.getElementById("project-content");
  document.querySelectorAll('.card-1').forEach(card => card.remove());
};

//event listners
let projects = [];
addSign.addEventListener('click', () => {
  clearContent();
  ProjectForm.showForm();
});

form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('project-title').value;
      const project = new Project(title);
      projects.push(project);
});

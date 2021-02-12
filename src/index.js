import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';

//selectors
const addSign = document.querySelector('#add-project');

//functions
const clearContent = () => {
  const content = document.getElementById("project-content");
  document.querySelectorAll('.card-1').forEach(card => card.remove());
};

//event listners
let projects = [];
addSign.addEventListener('click', () => {
  clearContent();
  ProjectForm.addProjectForm();
  const btn = document.querySelector('#add-project-btn');
  const title = document.getElementById('project-title');
  btn.addEventListener('submit', (e) => {
  });
});
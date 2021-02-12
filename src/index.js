import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';

window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);

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
  ProjectForm.showForm();
  const submitBtn = document.getElementById('submit-form');
  console.log(submitBtn);
  ProjectForm.formDetails(submitBtn);
});


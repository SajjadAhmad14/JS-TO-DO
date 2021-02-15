import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';
import Project from './addProject';
import Projects from './project.js';
import addToDoForm from './addToDo.js'

window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);

//selectors
const addSign = document.querySelector('#add-project');
const form = document.getElementById('form');
const viewProjectBtn = document.getElementById('view-project');
// const todoForm = document.getElementById('todo-form');
const todobtn = document.getElementById('add-todo');
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


todobtn.addEventListener('click', () => {
  addToDoForm.todoForm();
  const btn = document.getElementById('submit');
  btn.onsubmit = function() {
    console.log("hello WOrld");
    addToDoForm.test();
  };
  // btn.addEventListener('submit', () =>{
  //  console.log('Hello');
  // })
}); 

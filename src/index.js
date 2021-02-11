import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './newProject';


//selectors
const addSign = document.querySelector('#add-project');

//functions
const clearContent = () => {
  const content = document.getElementById("project-content");
  document.querySelectorAll('.card-1').forEach(card => card.remove());
};



//event listners
addSign.addEventListener('click', () => {
  clearContent();
  Project.addProject();
});
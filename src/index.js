import './style.css';
import './properties.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './newProject';
const addSign = document.querySelector('#add-project');
addSign.addEventListener('click', Project.addProject);
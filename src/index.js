import './style.css';
import TodoItem from './properties';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectForm from './newProject';
import './addProject';
import Project from './addProject';
import Projects from './project';
import addToDoForm from './addToDo';
import items from './toDoItems';


window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);

//selectors
const addSign = document.querySelector('#add-project');
const form = document.getElementById('form');
const viewProjectBtn = document.getElementById('view-project');
const todobtn = document.getElementById('add-todo');
const todoform = document.getElementById('todo-form');


//functions

const clearProjectList = (container) => {
  document.querySelectorAll(container).forEach(project => project.remove());
};

const filterProject = (project) => {
  let find = -1;
  for (let i = 0; i < Projects.length; i++) {
    if (project.title == Projects[i].title) {
      find = 1;
      break;
    }
  }
  if (find == -1) {
    Projects.push(project);
  }
  else {
    alert('Project already exists!')
  }
};

const hideTodoForm = (form) => {
  form.style.display = 'none';
};

//event listners

addSign.addEventListener('click', () => {
  ProjectForm.showForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('project-title').value.toUpperCase();
  const project = new Project(title);
  filterProject(project);
  document.getElementById('form').reset();
  clearProjectList('.project-list');
  ProjectForm.viewAllProject();
});

viewProjectBtn.addEventListener('click', () => {
  clearProjectList('.project-list');
  ProjectForm.viewAllProject();
});


todobtn.addEventListener('click', () => {
  const form = addToDoForm.todoForm();
  createListObject(form);
});

const createListObject = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todobtn = document.getElementById('submit');
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const duedate = document.getElementById('duedate').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    const item = new TodoItem(title, description, duedate, priority, project);
    items.push(item);
    addToDoForm.itemProject(item);
    addToDoForm.addList();
    form.reset();
  });

};
import './style.css';
import TodoItem from './modules/properties';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './modules/addProject';
import ProjectForm from './modules/newProject';
import Projects from './modules/project';
import addToDoForm from './modules/addToDo';
import items from './modules/toDoItems';
import Store from './modules/localStorage';

window.addEventListener('DOMContentLoaded', ProjectForm.hideForm);


// selectors
const addSign = document.querySelector('#add-project');
const form = document.getElementById('form');
const todobtn = document.getElementById('add-todo');
const cancelProjectFormBtn = document.getElementById('cancelproject-form');

// functions

function setDefault() {
  const data = Store.getProject();
  if (data.length >= 0) {
    const project1 = new Project('TestProject');
    Projects.push(project1);
    Store.addProject(Projects);
  }
}
setDefault();
ProjectForm.viewAllProject();

const clearProjectList = (container) => {
  document.querySelectorAll(container).forEach(project => project.remove());
};

const filterProject = (project) => {
  let find = -1;
  for (let i = 0; i < Projects.length; i += 1) {
    if (project.title === Projects[i].title) {
      find = 1;
      break;
    }
  }
  if (find === -1) {
    Projects.push(project);
    Store.addProject(project);
  } else {
    alert('Project already exists!');
  }
};


// event listners

addSign.addEventListener('click', () => {
  ProjectForm.showForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('project-title').value.toUpperCase();
  const project = new Project(title);
  filterProject(project);
  document.getElementById('form').reset();
  document.getElementById('form').style.display = 'none';
  clearProjectList('.project-list');
  ProjectForm.viewAllProject();
});

const createListObject = (form) => {
  const todoCancelBtn = document.getElementById('canceltodo-form');
  todoCancelBtn.addEventListener('click', () => {
    todobtn.style.display = 'block';
    form.style.display = 'none';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const duedate = document.getElementById('duedate').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    const item = new TodoItem(title, description, duedate, priority, project);
    items.push(item);
    Store.addTodo(item);
    form.reset();
  });
};

todobtn.addEventListener('click', () => {
  const form = addToDoForm.todoForm();
  todobtn.style.display = 'none';
  createListObject(form);
});

cancelProjectFormBtn.addEventListener('click', () => {
  const form = document.getElementById('form');
  form.style.display = 'none';
});

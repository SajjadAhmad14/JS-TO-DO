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
const clearContent = () => {
  const content = document.getElementById("project-content");
  document.querySelectorAll('.card-1').forEach(card => card.remove());
};

//event listners

addSign.addEventListener('click', () => {
  clearContent();
  ProjectForm.showForm();
});

const clearProjectList = () => {
  // const container = document.getElementById('all-projects');
  document.querySelectorAll('.project-list').forEach(project => project.remove());
};

form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('project-title').value;
      const project = new Project(title);
      Projects.push(project);
      document.getElementById('form').reset();
      clearProjectList();
      ProjectForm.viewAllProject();
});

viewProjectBtn.addEventListener('click', () => {
  clearContent();
  ProjectForm.viewAllProject();
});


todobtn.addEventListener('click', () => {
  const form = addToDoForm.todoForm();
  createListObject(form);
  
});

const createListObject = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const duedate = document.getElementById('duedate').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    const item = new TodoItem(title, description, duedate, priority,project);
    items.push(item);
    addToDoForm.itemProject(item);
    addToDoForm.addList();
    form.reset();
  });

};


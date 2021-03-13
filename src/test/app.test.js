import TodoItem from '../modules/properties';
import Project from '../modules/addProject';
import Store from '../modules/localStorage';

const project = new Project('First Project');
const firstTodo = new TodoItem('First Todo', 'This is first todo item', '2021-04-04', 'high', 'First Project');
const projects = Store.getProject();
let items = Store.getTodo();

test('Length of Projects array should be 0', () => {
  expect(projects.length).toBe(0);
});

test('Length of First Project item array should be 0', () => {
  projects.push(project);
  expect(project.items.length).toBe(0);
});

test('Length of items array should increment by 0', () => {
  expect(items.length).toBe(0);
});

test('Length of First Project item array should increment by 1', () => {
  items.push(firstTodo);
  expect(items.length).toBe(1);
});

test('Length of items array should decrement by 1', () => {
  items = Store.getTodo();
  expect(items.length).toBe(0);
});
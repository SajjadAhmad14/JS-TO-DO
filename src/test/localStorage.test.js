import Project from '../modules/addProject';
import Store from '../modules/localStorage'
import TodoItem from '../modules/properties';

test('should save project to Local Storage', () => {
  const project = new Project('first');
  Store.addProject(project);
  const projects =   Store.getProject();
  expect(projects.length).toBe(1);
});

test('should remove project from Local Storage', () => {
  const project = new Project('second');
  Store.removeTodo(project.title);
  const projects =   Store.getProject();
  expect(projects.length).toBe(1);
});

test('should save item to Local Storage', () => {
  const item = new TodoItem('first', 'This is first item', '2022-01-01', 'high', 'first');
  Store.addTodo(item);
  const items = Store.getTodo();
  expect(items.length).toBe(1);
});

test('should remove item from Local Storage', () => {
  const item = new TodoItem('second', 'This is second item', '2022-02-02', 'low', 'first');
  Store.removeTodo('first');
  const items = Store.getTodo();
  expect(items.length).toBe(0);
});
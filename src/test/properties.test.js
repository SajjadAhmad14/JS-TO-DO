import TodoItem from '../modules/properties';

const item = new TodoItem('first', 'This is first item', '2022-01-01', 'high', 'first');

test('item is an instance of ToDoItem', () => {
  expect(item).toBeInstanceOf(TodoItem);
});

test('test title of item', () => {
  expect(item.title).toBe('first');
});

test('test description of item', () => {
  expect(item.description).toBe('This is first item');
});

test('Due Date of the added todo item should be 2022-01-01', () => {
  expect(item.dueDate).toBe('2022-01-01');
});

test('Priority of the added todo item should be High', () => {
  expect(item.priority).toBe('high');
});

test('Project of the added todo item should first', () => {
  expect(item.project).toBe('first');
});
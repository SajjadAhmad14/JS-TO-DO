import TodoItem from '../modules/properties'

const item = new TodoItem('first', 'This is first item', '2020-01-01', 'high', 'first');

test('item is an instance of ToDoItem', () => {
  expect(item).toBeInstanceOf(TodoItem);
});

test('test title of item', () => {
  expect(item.title).toBe('first')
});

test('test description of item', () => {
  expect(item.description).toBe('This is first item')
});
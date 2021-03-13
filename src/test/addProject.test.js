import Project from '../modules/addProject';
import Projects from '../modules/project';

const project = new Project('First');
Projects.push(project);

test('Name of the project should be First', () => {
  expect(project.title).toBe('First');
});

test('Title of the first project in Projects array should be First', () => {
  expect(Projects[0].title).toBe('First');
});

test('Items array of First project should be empty', () => {
  expect(Projects[0].items.length).toBe(0);
});

test('Length of Projects array should be 1', () => {
  expect(Projects.length).toBe(1);
});

test('Should increase the length of Projects array', () => {
  Projects.push(new Project('Second Project'));
  expect(Projects.length).toBe(2);
});

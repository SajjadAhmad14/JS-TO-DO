import {jest} from '@jest/globals';
import Project from'../modules/addProject';
import Projects from '../modules/project';

const project = new Project("First");
Projects.push(project);

test('name of the project should be First', () => {
  expect(project.title).toBe("First");
});

test('Title of the first project in Projects array should be First', () => {
  expect(Projects[0].title).toBe("First");
});

test('Items array of First project should be empty', () => {
  expect(Projects[0].items.length).toBe(0);
});
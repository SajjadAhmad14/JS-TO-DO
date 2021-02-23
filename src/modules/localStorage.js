class Store {
  static getProject() {
    let projects;
    if (localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  }

  static addProject(project) {
    const projects = Store.getProject();
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static getTodo() {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
  }

  static addTodo(item) {
    const items = Store.getTodo();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeTodo(projectTitle) {
    const items = Store.getTodo();
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].project === projectTitle) {
        items.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
  }

  static editToDo(title, description, duedate, priority, project, index) {
    const items = Store.getTodo();
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].project === project && index - 1 === i) {
        items[i].title = title;
        items[i].description = description;
        items[i].dueDate = duedate;
        items[i].priority = priority;
        items[i].project = project;
        break;
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
  }
}

export default Store;
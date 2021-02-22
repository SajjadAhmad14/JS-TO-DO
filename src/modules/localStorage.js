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

  static removeTodo(args) {
    const items = Store.getTodo();
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].project === args) {
        items.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export default Store;
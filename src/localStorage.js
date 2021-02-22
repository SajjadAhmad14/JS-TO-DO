class Store {

  static getProject() {
    let projects;
    if(localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  }

  static addProject(project) {
    const projects = Store.getProject();
    projects.push(project);
    localStorage.setItem('projects',JSON.stringify(projects));
  }

  static getTodo() {
    let items;
    if(localStorage.getItem('items') === null) {
      items =[];
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
}

export default Store;
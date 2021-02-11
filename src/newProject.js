const Project = (() => {
  const addProject = () => {
    const projectContainer = document.querySelector('.project-container');
    const form = document.createElement('form');
    form.innerHTML = `<input type = 'text'>
    <button>Add</button>
    `;
    projectContainer.appendChild(form);
  }
    return { addProject };
})();

export default Project;

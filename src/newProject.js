const ProjectForm = (() => {
  const addProjectForm = () => {
    const projectContainer = document.querySelector('.project-container');
    const form = document.createElement('form');
    form.innerHTML = `<input type = 'text'>
    `;
    const btn = document.createElement('INPUT');
    btn.setAttribute("type", "submit");
    btn.setAttribute('id', 'add-project-btn');
    form.appendChild(btn);
    projectContainer.appendChild(form);
  }
    return { addProjectForm };
})();

export default ProjectForm;

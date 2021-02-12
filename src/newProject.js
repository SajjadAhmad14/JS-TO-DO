const ProjectForm = (() => {
  // const addProjectForm = () => {
  //   const projectContainer = document.querySelector('.project-container');
  //   const form = document.createElement('form');
  //   form.innerHTML = `<input type = 'text' id = 'project-title'>
  //   `;
  //   const btn = document.createElement('INPUT');
  //   btn.setAttribute("type", "submit");
  //   btn.setAttribute('id', 'add-project-btn');
  //   form.appendChild(btn);
  //   projectContainer.appendChild(form);
  // };

  const showForm = (() => {
    document.getElementById('form').style.display = 'block';
  });

  const hideForm = (() => {
    document.getElementById('form').style.display = 'none';
  });

  const formDetails = ((btn) => {
    btn.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('project-title');
      console.log(title);
    });
  });

    return { showForm, hideForm, formDetails };
})();



export default ProjectForm;

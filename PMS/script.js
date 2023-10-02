function addProject() {
    const projectName = document.getElementById('project-name').value;
    if (projectName) {
        const projectList = document.getElementById('project-list');
        const li = document.createElement('li');
        li.textContent = projectName;
        projectList.appendChild(li);
        document.getElementById('project-name').value = '';
    }
}

function addTask() {
    const taskName = document.getElementById('task-name').value;
    if (taskName) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskName;
        taskList.appendChild(li);
        document.getElementById('task-name').value = '';
    }
}

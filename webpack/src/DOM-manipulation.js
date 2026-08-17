function renderTasks(arrTasks, container) {
  const div = document.createElement("div");
  div.classList.add("tasks-container");

  arrTasks.forEach((element) => {
    div.appendChild(renderSingleTask(element));
  });

  container.append(div);
}

function renderSingleTask(taskObj) {
  const container = document.createElement("div");
  container.classList.add("single-task-container");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-checkbox";
  checkbox.name = "task-checkbox";

  const taskInfoContainer = document.createElement("div");
  taskInfoContainer.classList.add("task-info-container");

  const heading = document.createElement("h3");
  heading.textContent = taskObj.title;

  const dueDate = document.createElement("p");
  dueDate.textContent = taskObj.dueDate;

  taskInfoContainer.append(heading, dueDate);

  container.append(checkbox, taskInfoContainer);

  return container;
}

export { renderTasks };

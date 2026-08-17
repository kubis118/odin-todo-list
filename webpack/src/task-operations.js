import { getUniqueId } from "./data.js";

class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.finished = false;
  }
}

function createTask(arrTasks, title, description, dueDate, priority, project) {
  const task = new Task(title, description, dueDate, priority, project);
  task.finished = false;
  task.id = getUniqueId();

  arrTasks.push(task);
}

function getTodayTasks(arrTasks) {
  const tdDate = new Date();
  const day = tdDate.getDate();
  const month = tdDate.getMonth() + 1;
  const year = tdDate.getFullYear();

  const date = `${day}.${month}.${year}`;

  return arrTasks.filter((task) => {
    return task.dueDate === date;
  });
}

function getProjectTasks(arrTasks, project) {
  return arrTasks.filter((task) => {
    return task.project === project;
  });
}

function toggleCompleteTask(arrTasks, taskId) {
  const task = arrTasks.find((task) => task.id == taskId);

  if (task.finished) {
    task.finished = false;
  } else {
    task.finished = true;
  }
}

function changeTaskPriority(arrTasks, taskId, priority) {
  const task = arrTasks.find((task) => task.id == taskId);

  task.priority = priority;
}

function changeTaskProject(arrTasks, taskId, project) {
  const task = arrTasks.find((task) => task.id == taskId);

  task.project = project;
}

function changeDueDate(arrTasks, taskId, dueDate) {
  const task = arrTasks.find((task) => task.id == taskId);

  task.dueDate = dueDate;
}

export {
  Task,
  createTask,
  getTodayTasks,
  getProjectTasks,
  toggleCompleteTask,
  changeTaskPriority,
  changeTaskProject,
  changeDueDate,
};

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

export { Task, createTask, getTodayTasks, getProjectTasks };

import "./style.css";
import "./task-card.css";
import {
  Task,
  createTask,
  getTodayTasks,
  getProjectTasks,
  toggleCompleteTask,
  changeTaskPriority,
  changeTaskProject,
  changeDueDate,
} from "./task-operations.js";
import { renderTasks } from "./DOM-manipulation.js";
import { tasks } from "./data.js";

const container = document.querySelector(".container");

container.appendChild(renderTasks(tasks));

const inboxBtn = document
  .querySelector("#btn-inbox")
  .addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(renderTasks(getProjectTasks(tasks, "inbox")));
  });

const todayBtn = document
  .querySelector("#btn-today")
  .addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(renderTasks(getTodayTasks(tasks)));
  });

const addTaskBtn = document
  .querySelector("#btn-submit-task")
  .addEventListener("click", () => {
    event.preventDefault();
    const taskTitle = document.getElementById("task-title").value;
    const taskDueDate = document.getElementById("task-due-date").value;

    createTask(tasks, taskTitle, "", taskDueDate, "");
    console.log(tasks);

    const dialog = document.getElementById("add-task-dialog");

    dialog.style.display = "none";
  });

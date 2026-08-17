import "./style.css";
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

const todo = createTask(
  tasks,
  "Iron clothes",
  "",
  "15.3.2026",
  "high",
  "chores",
);
const container = document.querySelector(".container");

renderTasks(getProjectTasks(tasks, "chores"), container);

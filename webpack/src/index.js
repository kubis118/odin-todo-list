import "./style.css";
import {
  Task,
  createTask,
  getTodayTasks,
  getProjectTasks,
} from "./task-operations.js";
import { tasks } from "./data.js";

const todo = createTask(
  tasks,
  "Iron clothes",
  "",
  "15.3.2026",
  "high",
  "chores",
);

console.log(tasks);
console.log(getTodayTasks(tasks));
console.log(getProjectTasks(tasks, "inbox"));

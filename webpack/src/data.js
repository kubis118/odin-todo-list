const tasks = [
  {
    id: 0,
    title: "Shop for groceries",
    description: "",
    dueDate: "15.8.2026",
    priority: "medium",
    project: "chores",
    finished: true,
  },
  {
    id: 1,
    title: "Present for mum's bday",
    description: "Ideas: Flowerpot",
    dueDate: "15.8.2026",
    priority: "high",
    project: "inbox",
    finished: false,
  },
  {
    id: 2,
    title: "Do dishes",
    description: "",
    dueDate: "18.8.2026",
    priority: "low",
    project: "chores",
    finished: false,
  },
  {
    id: 3,
    title: "Vacuum flat",
    description: "",
    dueDate: "17.8.2026",
    priority: "medium",
    project: "chores",
    finished: true,
  },
  {
    id: 4,
    title: "Mum's birthday",
    description: "",
    dueDate: "17.8.2026",
    priority: "high",
    project: "inbox",
    finished: false,
  },
];

let id = 4;

function getUniqueId() {
  return (id += 1);
}

export { tasks, getUniqueId };

import React, { useState } from "react";
// import style from "./Tasks.module.css";
import AddTask from "../AddTask/AddTask";
import List from "../List/List";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTitle, setTaskTitle] = useState("");



  function handelTaskDescription(e) {
    let inputDescription = e.target.value;
    setTaskDescription(inputDescription);
  }
  function handelTaskTitle(e) {
    e.preventDefault();
    let inputTitle = e.target.value;
    setTaskTitle(inputTitle);
  }

  function handelAddTask(e) {
    e.preventDefault();
    if (!taskTitle && !taskDescription) return;
    setId(id + 1);

    let newTask = { id: id, title: taskTitle, description: taskDescription };
    setTasks((tasks) => [...tasks, newTask]);
    e.target.reset();
  }

  function handelDeleteTask(taskId) {
    let filteredTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTask);
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary fw-bold">🎯 Task Manager</h1>
        <p className="text-muted">Stay productive, stay focused.</p>
      </div>

      <div className="card bg-white border-0 shadow p-4 mb-5">
        <AddTask
          onAddTask={handelAddTask}
          onInputTaskDescription={handelTaskDescription}
          onInputTaskTitle={handelTaskTitle}
        />
      </div>

      <List tasks={tasks} onDeleteTask={handelDeleteTask} />
    </div>
  );
}

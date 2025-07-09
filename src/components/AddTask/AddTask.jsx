import React from "react";
// import style from "./AddTask.module.css";

export default function AddTask({
  onAddTask,
  onInputTaskDescription,
  onInputTaskTitle,
}) {
  return (
    <form onSubmit={onAddTask} className="bg-light p-4 rounded shadow-sm">
      <div className="mb-3">
        <input
          type="text"
          className="form-control border-primary"
          placeholder="🌟 Task Title"
          onInput={onInputTaskTitle}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control border-success"
          placeholder="📝 Task Description"
          onInput={onInputTaskDescription}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success fw-bold">
          ➕ Add Task
        </button>
      </div>
    </form>
  );
}

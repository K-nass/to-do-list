import React from "react";
// import style from './List.module.css'

export default function List({ tasks, onDeleteTask }) {
  return (
    <div className="row">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div className="col-md-6 col-lg-4 mb-4" key={task.id}>
            <div className="card border-0 shadow-lg h-100 text-white bg-gradient bg-warning">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                </div>
                <div className="text-end mt-3">
                  <button
                    className="btn btn-sm btn-outline-light fw-bold"
                    onClick={() => {
                      onDeleteTask(task.id);
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <div
            className="alert alert-warning text-center fw-bold fs-5"
            role="alert"
          >
            No tasks yet. Start by adding your first task!
          </div>
        </div>
      )}
    </div>
  );
}

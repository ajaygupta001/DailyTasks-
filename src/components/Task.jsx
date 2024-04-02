import React from "react";
import "./Task.css";

const Task = ({ title, description, deletetask, index }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={() => deletetask(index)}>-</button>
    </div>
  );
};

export default Task;

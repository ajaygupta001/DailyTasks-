import React, { useState } from "react";
import "./Home.css";
import Task from "./Task";
import { useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const handlerSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deletetask = (index) => {
    const filterArr = tasks.filter((value, i) => {
      return i !== index;
    });
    setTasks(filterArr);
  };

  return (
    <div className="container">
      <h1>DAILY TASKS</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="description"
          placeholder="Enter description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>

      {tasks.map((value, index) => (
        <Task
          key={index}
          title={value.title}
          description={value.description}
          deletetask={deletetask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;

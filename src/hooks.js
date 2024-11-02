import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return { tasks, addTask };
};

export default useTasks;

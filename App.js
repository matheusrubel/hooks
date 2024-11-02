import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useTasks from './hooks';

const Task = ({ title, completed }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{completed ? '✅ Completa' : '❌ Incompleta'}</p>
    </div>
  );
};

const TaskList = () => {
  const { tasks, addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ id: Date.now(), title, completed });
      setTitle('');
      setCompleted(false);
    }
  };

  useEffect(() => {
    console.log('TaskList montado!');
  }, []);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título da Tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Concluída
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Sobre o Aplicativo</h2>
      <p>Este é um gerenciador de tarefas simples desenvolvido para praticar React.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;


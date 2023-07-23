import React, { useState } from 'react';

function App() {
  const [textInput, setTextInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (textInput.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: textInput
    };

    setTaskList([...taskList, newTask]);
    setTextInput('');
  };

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter(task => task.id !== taskId));
  };

  return (
    <div className='content'>
      <h1 className='title'>Lista de tareas</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={textInput}
          onChange={handleInputChange}
          placeholder="Añadir tarea..."
        />
        <input type="submit" value="Añadir" />
      </form>
      <ul className='list'>
        {taskList.map(task => (
          <li className='text' key={task.id}>
            <button className='delete' onClick={() => handleDeleteTask(task.id)}>✓</button>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
import { useState } from 'react';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1030, name: 'Record React Lectures', completed: true },
    { id: 4029, name: 'Edit React Lectures', completed: false },
    { id: 7581, name: 'Watch Lectures', completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? 'completed' : 'incomplete'}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

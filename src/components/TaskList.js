import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

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
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem Success</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem Warning</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          quaerat sunt, maiores amet nobis mollitia possimus delectus, impedit
          non incidunt, est explicabo numquam sit aliquam autem. Laboriosam qui
          numquam itaque.
        </p>
      </BoxCard>
    </>
  );
};

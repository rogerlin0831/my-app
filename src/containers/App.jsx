import React from 'react';
// import TimeCount from '../object/TimeCount';
// import RandObject from '../object/RandObject';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Footer from '../components/Foooter';
import About from '../components/About';
import { useLocation } from 'react-router-dom';

const App = () => {
  //const location = useLocation();

  const [showadd, setshowadd] = useState(false);
  //
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskfromserver = await fetchTasks();
      setTasks(taskfromserver);
    };
    getTasks();
  }, []);

  //
  const dbpath = 'http://localhost:3000/tasks';

  const fetchTasks = async () => {
    const res = await fetch(dbpath);
    const data = await res.json();
    return data;
  };

  const addtask = async add_data => {
    const res = await fetch(dbpath, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(add_data),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 100000) + 1;
    // const newTask = { id, ...add_data };
    // setTasks([...tasks, newTask]);
  };

  const deleteTask = async id => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    // setTasks(tasks.filter(task => task.id !== id));
  };

  // edit reminder
  const editTask = async id => {
    const taskTotoggle = await fetchTask(id);
    const updTask = { ...taskTotoggle, reminder: !taskTotoggle.reminder };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  const fetchTask = async id => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  return (
    <BrowserRouter>
      <div>
        {
          <Button
            _text={showadd ? 'Close' : 'Add Task'}
            _backgroundColor={showadd ? 'red' : 'green'}
            _onClick={() => {
              setshowadd(!showadd);
            }}
            _showadd={showadd}></Button>
        }

        <Route
          path="/"
          exact
          render={props => (
            <>
              {showadd && <AddTask onAdd={addtask}></AddTask>}
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={editTask} />
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

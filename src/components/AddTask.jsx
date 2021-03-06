import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Error text');
      return;
    }
    if (!day) {
      alert('Error day');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={e => setText(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type="text" placeholder="Add Day" value={day} onChange={e => setDay(e.target.value)}></input>
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}></input>
        <label>Set Reminder</label>
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;

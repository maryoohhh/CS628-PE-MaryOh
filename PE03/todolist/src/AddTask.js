import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        className="text"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="add" onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </div>
  )
}

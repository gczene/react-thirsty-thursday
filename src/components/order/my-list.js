import React from 'react';

export default ({items, addBooze}) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
          <button onClick={() => addBooze(item)} className="btn btn-outline-primary float-right">Add</button>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';

export default ({items, addBooze, deletePreviousOrders}) => {
  if (!items.length) {
    return null;
  }
  return (
    <div>
      <ul className="list-group">
          <li className="list-group-item"><b>Your previous order(s)</b></li>
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
            <button onClick={() => addBooze(item)} className="btn btn-outline-primary float-right">Add</button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-3 mb-3">
        <button onClick={deletePreviousOrders} className="btn btn-danger">Clear my history</button>
      </div>
    </div>
  );
}

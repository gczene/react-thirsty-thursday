import React from 'react';

export default ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (<li key={index} className="list-group-item">{item}</li>))}
    </ul>
  );
}

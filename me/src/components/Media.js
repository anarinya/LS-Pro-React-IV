import React from 'react';

export default () => {
  const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
  return (
    <div className="Media">
      <div className="header">
        <h2>media</h2>
      </div>
      <div className="body">
        <ul className="photo-list card-list">
          { images.map(img => ( <li><img src={`photos/${img}`} alt={img} /></li> )) }  
        </ul>
      </div>
    </div>
  );
};
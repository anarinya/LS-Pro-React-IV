import React from 'react';
import FontIcon from './FontIcon';

export default () => {
  return (
    <div className="Hobbies">
      <div className="header">
        <h2>hobbies</h2>
      </div>
      <div className="body">
        <ul className="hobbies-list card-list">
          <li><FontIcon icon="graduation-cap" />Learning Stuff</li>
          <li><FontIcon icon="code" />Dev</li>
          <li><FontIcon icon="tint" />Kayaking</li>
          <li><FontIcon icon="car" />German Cars</li>
          <li><FontIcon icon="paw" />Dogs</li>
          <li><FontIcon icon="gamepad" />Video Games</li>
          <li><FontIcon icon="mobile" />Technology</li>
          <li><FontIcon icon="paint-brush" />Art</li>
        </ul>
      </div>
    </div>
  );
};
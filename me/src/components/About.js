import React from 'react';
import FontIcon from './FontIcon';

export default () => {
  return (
    <div className="About">
      <div className="header">
        <h2>about</h2>
      </div>
      <div className="body">
        <ul className="about-list card-list">
          <li>
            <FontIcon icon="rocket" />
            I've been driving software projects forever, and I'm now studying to become a developer.
          </li>
          <li>
            <FontIcon icon="lightbulb-o" />
            I have a boatload of software product ideas that I hope to create one day.
          </li>
          <li>
            <FontIcon icon="paw" />
            I think dogs are the best creatures on the planet and everyone should have one.
          </li>
        </ul>
      </div>
    </div>
  );
};
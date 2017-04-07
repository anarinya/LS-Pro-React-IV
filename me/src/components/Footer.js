import React from 'react';
import FontIcon from './FontIcon';

export default (props) => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="explanation">
          <img className="react-logo" src="photos/react.svg" alt="react-spinner" />
          React Router : Test Page
        </div>
        <div className="info">
          <a href="https://github.com/anarinya/LS-Pro-React-IV">
            github
          </a>
        &nbsp;<FontIcon icon="heart" />
        </div>
      </div>
    </div>
  );
};
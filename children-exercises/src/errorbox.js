import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox( { children } ) {
  return (
    <div className="alert alert-danger error-box">
      {children}
    </div>
  );
}

ReactDOM.render(
  <ErrorBox>The World is Ending!!</ErrorBox>,
  document.getElementById('root'));

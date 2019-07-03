import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FirstChildOnly( {children} ) {
  let items = React.Children.toArray(children);
  return (
    <div className="alert alert-danger error-box">
      {items[0]}
    </div>
  );
}

function LastChildOnly( {children} ) {
  let items = React.Children.toArray(children);
  return (
    <div className="alert alert-danger error-box">
      {items[items.length-1]}
    </div>
  );
}

function Head( {children, number} ) {
  let items = React.Children.toArray(children);
  return (
    <div className="alert alert-danger error-box">
      {items[number-1]}
    </div>
  );
}

function Tail( {children, number} ) {
  let items = React.Children.toArray(children);
  return (
    <div className="alert alert-danger error-box">
      {items.slice(number-1)}
    </div>
  );
}

ReactDOM.render(
  <Tail number={2}>
    <span>I am the first child!</span>
    <span>I am the second child!</span>
    <span>I am the third child!</span>
  </Tail>,
  document.getElementById('root'));

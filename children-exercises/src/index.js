import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Dialog( { children } ) {
  let title, body, footer;
  title = body = footer = null;
  
  React.Children.forEach(children, child => {
    switch(child.type) {
      case Title:
        title = child;
        break;
      case Footer:
        footer = child;
        break;
      case Body:
        body = child;
        break;
      default:
        throw new Error("Dialog can only contain Title, Body, and Footer components.");
    };
  });

  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {body}
      </div>
      <div>
        {footer}
      </div>
    </div>
  );
}

function Title( {children} ) {
  return (
    <div>
      {children}
    </div>
  );
}

function Body( { children } ) {
  return (
    <div>
      {children}
    </div>
  );
}

function Footer( { children } ) {
  return (
    <div>
      {children}
    </div>
  );
}

function Test() {
  return (
    <Dialog>
      <Title>This is important</Title>
      <Body>Here is some important text or error or something.</Body>
      <Footer>
        <button className="btn btn-default">Close</button>
      </Footer>
    </Dialog>
  );
}


ReactDOM.render(
  <Test/>,
  document.getElementById('root'));

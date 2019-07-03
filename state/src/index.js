import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function handleAction(event) {
  console.log('Child did:', event);
}

function Parent() {
  return (
    <Child onAction={handleAction}/>
  );
}

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }

  handleAction = (action) => {
    console.log("Child says", action);

    // actionCount is incremented, and the new
    // count replaces the existing one.
    this.setState((state, props) => {
      return {
        actionCount: this.state.actionCount + 1
      }
    });
  }

  resetCount = (action) => {

    // reset actionCount back to zero
    this.setState((state, props) => {
      return {
        actionCount: 0
      }
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} resetCount={this.resetCount}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction, resetCount }) {
  return (
    <>
      <button onClick={onAction}>
        Click Me!
      </button>
      <button onClick={resetCount}>
        Reset count!
      </button>
    </>
  );
}

const Page = () => (
  <div>
   <CountingParent/>
   <CountingParent/>
   <CountingParent/>
  </div>
);

ReactDOM.render(
  <Page/>,
  //<CountingParent/>,
  document.getElementById('root'));

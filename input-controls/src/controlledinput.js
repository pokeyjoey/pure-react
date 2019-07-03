import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Example extends React.Component {
  state = {
    text: ''
  };

  handleChange = (event) => {
    console.log('before replace: ', this.state.text);
    let text = event.target.value;
    text = text.replace(/[0-9]/g, '');
    this.setState({ 
      text: text
    });
    //this.setState({
    //  text: event.target.value
    //});
    console.log('after replace: ', this.state.text);
    console.log(this.state.text);
  };

  render() {
    return (
      <input type="text"
        value={this.state.text}
        onChange={this.handleChange}/>
    );
  }
}

ReactDOM.render(
  <Example/>,
  document.getElementById('root'));

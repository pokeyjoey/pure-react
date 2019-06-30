import React from 'react';
import ReactDOM from 'react-dom';

function Book() {
  return (
    <div className='book'>
      <Title/>
      <Author/>
      <Stats/>
    </div>
  );
}

function Title() {
  return (
    <div className='title'>
      The Title
    </div>
  );
}

function Author() {
  return (
    <div className='author'>
      The Author
    </div>
  );
}

function Stats() {
  return (
    <ul className='stats'>
      <StatsListItems/>
    </ul>
  );
}

function StatsListItems() {
  return (
    <>
      <li className='stats'>
        5 stars
      </li>
      <li className='isbn'>
        12-345678-910
      </li>
    </>
  );
}

function NewLineTest() {
  return (
    <div>
      Newline
      {' '}
      Test
    </div>
  );
}

function Greeting() {
  // Try all of these variations
  let username = "root";
  // let username = undefined;
  // let username = null;
  // let username = false;
  return (
    <span>
      {username ? "Hello, " + username : 'Not logged in'}
    </span>
  );
}

function ReturnMultipleElements() {
  return (
    <span>
      <div>
        Element one
      </div>
      <div>
        Element two
      </div>
    </span>
  );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data/>
        </tr>
      </tbody>
    </table>
  );
}

function Data() {
  return (
    <>
      <td>Kirk</td>
      <td>Spock</td>
      <td>McCoy</td>
    </>
  );
}


ReactDOM.render(
  //<Book/>,
  //<NewLineTest/>,
  //<Greeting/>,
  //<ReturnMultipleElements/>,
  <Table/>,
  document.getElementById('root')
);

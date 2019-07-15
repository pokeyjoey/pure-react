import React from 'react';
import ReactDOM from 'react-dom';

const Book = () => (
    <div className='book'>
      <Title/>
      <Author/>
      <Stats/>
    </div>
);

const Title = () => (
    <div className='title'>
      The Title
    </div>
);

const Author = () => (
    <div className='author'>
      The Author
    </div>
);

const Stats = () => (
    <ul className='stats'>
      <StatsListItems/>
    </ul>
);

const StatsListItems = () => (
    <>
      <li className='stats'>
        5 stars
      </li>
      <li className='isbn'>
        12-345678-910
      </li>
    </>
);

const NewLineTest = () => (
    <div>
      Newline
      {' '}
      Test
    </div>
);

const Greeting = () => {
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

function UnorderedList() {
  return (
    <ul>
      <li>Kirk</li>
      <li>Spock</li>
      <li>McCoy</li>
    </ul>
  )
}

const ArrowUnorderedList = () => (
  <ul>
    <li>John Carter</li>
    <li>Dejah Thoris</li>
    <li>Tars Tarkas</li>
  </ul>
);

ReactDOM.render(
  //<Book/>,
  //<NewLineTest/>,
  <Greeting/>,
  //<ReturnMultipleElements/>,
  //<Table/>,
  //<UnorderedList/>,
  document.getElementById('root')
);

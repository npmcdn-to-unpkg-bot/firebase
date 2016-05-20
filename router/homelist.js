import React from 'react';

class HomeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="add">Add</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomeList;  

// import React from 'react';

class CartIcon extends React.Component {
  render() {
    let count = 5;
    return (
      <button className="btn btn-primary">
        Cart ({count})
      </button>
    )
  }
}

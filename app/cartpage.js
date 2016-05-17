import React from 'react';
import CartPageItem from './cartpageitem';

class CartPage extends React.Component {
  render() {
    return (
      Cart Here
      <ul>
        {this.props.items.map((item=>{
          return (
              <CartPageItem item={item} />
          )
        }))}
      </ul>
    )
  }
}

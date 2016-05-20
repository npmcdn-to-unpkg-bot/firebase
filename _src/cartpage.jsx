// import React from 'react';
// import CartPageItem from './cartpageitem';

class CartPage extends React.Component {
  render() {
    return (
      <div>
        Cart Here
        <ul>
          {this.props.items.map((item=>{
            return (
                <CartPageItem item={item} />
            )
          }))}
        </ul>
      </div>
    )
  }
}

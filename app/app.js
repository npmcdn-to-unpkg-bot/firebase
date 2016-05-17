// import React from 'react';
// import CartIcon from './carticon';

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

class CartAdd extends React.Component {
  render() {
    return (
      <button className="btn btn-primary">
        Add to Cart
      </button>
    )
  }
}

class CartView extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
    console.log("search", this.state.search);
  }
  render() {
    let filteredItems = this.props.items.filter(
      (item) => {
        return item.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) !== -1;
      }
    );
    return (
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        {filteredItems.map(item => {
          return (
            <CartViewItem item={item} key={item.id} />
          );
        })}
          </tbody>
          <tfoot>
            <tr>
                <td>-</td>
                <td>-</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

class CartViewItem extends React.Component {
  updateName(event) {
    this.props.item.name = event.target.value;
    console.log(this.props.item.name);
  }
  render() {
    let qty = this.props.item.qty || 1;
    let price = this.props.item.price || 1;
    let total = qty * price;
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>
          <input type="text"
            defaultValue={this.props.item.name}
            onChange={this.updateName.bind(this)}
          />
        </td>
        <td>{qty}</td>
        <td>{price}</td>
        <td>{total}</td>
        <td>Remove</td>
      </tr>
    )
  }
}

class App extends React.Component {
  render() {
    let items = [
      {
        id: 1,
        name: "hello"
      },
      {
        id: 2,
        name:"there"
      }
    ];
    return (
      <div>
        <CartIcon />
        <CartAdd />
        <CartView items={items} />
        hello
      </div>
    );
  }
}

ReactDOM.render(
    <div>
      <App />
    </div>
    ,
    document.getElementById('app')
);

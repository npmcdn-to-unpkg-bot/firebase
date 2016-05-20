
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

class CartTable extends React.Component {
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
            <CartTableItem item={item} key={item.id} />
          );
        })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>12</td>
              <td></td>
              <td>12.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

class CartTableItem extends React.Component {
  render() {
    let qty = this.props.item.qty || 1;
    let price = this.props.item.price || 1;
    let total = qty * price;
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
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
        <CartTable items={items} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

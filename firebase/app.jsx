
const firebaseDatabase = 'luminous-fire-3175';
const firebasetable = 'todo';
const firebaseURL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

class TodoListItem extends React.Component {
  render() {
    return (
      <tr key={ this.props.item.handle }>
        <td>
          { this.props.item.handle }
        </td>
        <td>
          { this.props.item.title }
        </td>
        <td>
          { this.props.item.phone }
        </td>
        <td>
          <button onClick={this.props.removeItem.bind(null, this.props.item.handle)}>
            Remove
          </button>
        </td>
      </tr>
    )
  }
}

class TodoList extends React.Component {
  render() {
    let filteredItems = this.props.items;
    return (
      <table className="table table-border">
        <thead>
          <tr>
            <th>Handle</th>
            <th>Title</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(
            (item) => {
              return (
                <TodoListItem
                  item={item}
                  key={item.handle}
                  removeItem={this.props.removeItem} />
              );
            }
          )}
        </tbody>
      </table>
    )
  }
}

class TodoAddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      phone: ''
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title && this.state.title.trim().length !== 0) {
      let item = {};
      item.title = this.state.title;
      item.phone = this.state.phone;
      this.props.app.firebaseRef.push(item);
      this.setState({
        title: '',
        phone: ''
      });
    }
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) } className="form-horizontal">
        <div className="form-group">
          <label className="col-xs-2 control-label">Title</label>
          <div className="col-xs-10">
            <input
              className="form-control"
              onChange={ this.onChangeTitle.bind(this) }
              value={ this.state.title } />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-2 control-label">Phone</label>
          <div className="col-xs-10">
            <input
              className="form-control"
              onChange={ this.onChangePhone.bind(this) }
              value={ this.state.phone } />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-offset-2 col-sm-10">
            <button
              type="submit"
              className="btn btn-default">{ 'Add #' + (this.props.app.state.items.length + 1) }</button>
          </div>
        </div>
      </form>
    )
  }
}

class TodoApp extends React.Component {
  constructor() {
    super();
    this.firebaseRef = new Firebase(firebaseURL);
    this.state = {
      items: [],
    };
  }
  componentWillMount() {
    this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
      var items = [];
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.handle = childSnapshot.key();
        items.push(item);
      }.bind(this));
      this.setState({
        items: items
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }
  addItem(dataSnapshot) {
  }
  removeItem(handle) {
    let firebaseRef = new Firebase(firebaseURL);
    firebaseRef.child(handle).remove();
  }
  render() {
    return (
      <div>
        <TodoList items={ this.state.items } removeItem={ this.removeItem } />
        <TodoAddForm app={ this } />
      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);

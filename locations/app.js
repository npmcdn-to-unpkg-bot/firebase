
const firebaseDatabase = 'testing-2f687';
const firebasetable = 'location';
const firebaseURL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

class MainListItem extends React.Component {
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
          <button onClick={this.props.removeItemFn.bind(null, this.props.item.handle)}>
            Remove
          </button>
        </td>
      </tr>
    )
  }
}

class MainList extends React.Component {
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
  }
  render() {
    let filteredItems = this.props.items.filter(
      (item) => {
        return item.title.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) !== -1;
      }
    );
    return (
      <div>
        <div className="form-group">
          <label className="col-xs-2 control-label">Search</label>
          <div className="col-xs-10">
          <input type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          </div>
        </div>
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
                  <MainListItem
                    item={item}
                    key={item.handle}
                    removeItemFn={this.props.removeItemFn} />
                );
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

class MainEditForm extends React.Component {
  constructor() {
    super();
    this.clearState();
  }
  clearState() {
    this.state = {
      handle: '',
      title: '',
      phone: ''
    };
  }
  onChangeHandle(e) {
    this.setState({
      handle: e.target.value
    });
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
    console.log(this.props);
    this.props.app.addItem(this.state.handle, this.state);
    this.clearState();
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) } className="form-horizontal">
        <div className="form-group">
          <label className="col-xs-2 control-label">Handle</label>
          <div className="col-xs-10">
            <input
              className="form-control"
              onChange={ this.onChangeHandle.bind(this) }
              value={ this.state.handle } />
          </div>
        </div>
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

class MainApp extends React.Component {
  constructor() {
    super();
    this.firebaseRef = new Firebase(firebaseURL);
    this.state = {
      items: [],
    };
  }
  componentWillMount() {
    this.firebaseRef.on('value', this.addItemsFromResponse.bind(this));
  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }
  addItemsFromResponse(dataSnapshot) {
    var items = [];
    dataSnapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.handle = childSnapshot.key();
      items.push(item);
    }.bind(this));
    this.setState({
      items: items
    });
  }
  addItem(handle, values) {
    console.log('addItem', handle, values);
    if (!handle || handle.trim().length == 0) {
      console.error('addItem', 'Invalid Handle', handle);
      return 'Invalid Handle Length';
    }
    if (!values.title || values.title.trim().length == 0) {
      console.error('addItem', 'Invalid Title', values);
      return 'Invalid Title';
    }
    let item = {};
    item.handle = values.handle;
    item.title = values.title;
    item.phone = values.phone;
    console.log('addItem', 'item', item);
    // define the id to use
    let send = {};
    send[handle] = item;
    console.log('addItem', 'send', send);
    this.firebaseRef.update(send);
  }
  removeItem(handle) {
    let firebaseRef = new Firebase(firebaseURL);
    firebaseRef.child(handle).remove();
  }
  render() {
    return (
      <div>
        <MainList items={this.state.items} removeItemFn={this.removeItem} />
        <MainEditForm app={this} />
      </div>
    )
  }
}

ReactDOM.render(
  <MainApp />,
  document.getElementById('app')
);

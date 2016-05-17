
const firebaseDatabase = 'luminous-fire-3175';
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
          <button onClick={this.props.removeItem.bind(null, this.props.item.handle)}>
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
                    removeItem={this.props.removeItem} />
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

class MainApp extends React.Component {
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
        <MainList items={ this.state.items } removeItem={ this.removeItem } />
        <MainEditForm app={ this } />
      </div>
    )
  }
}

// let ReactRouter = window.ReactRouter
// let Router = ReactRouter.Router
// let Route = ReactRouter.Route
// let Link = ReactRouter.Link
// let Redirect = ReactRouter.Redirect
// let History = ReactRouter.hashHistory
//
// class StaticRoute extends React.Component {
//   render () {
//     return (
//       <Router history={History}>
//         <Route path="/" component={MainApp} />
//         <Route path="/add" component={MainEditForm} />
//         <Route path="/edit/:handle" component={MainEditForm} />
//       </Router>
//       );
//   }
// }
//
// ReactDOM.render(
//   <StaticRoute />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <MainApp />,
  document.getElementById('app')
);

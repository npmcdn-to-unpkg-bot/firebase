import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.jsx';

const firebaseDatabase = 'testing-2f687';
const firebasetable = 'location';
const firebaseURL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

class HomeListItem extends React.Component {
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
          <Link to={{ pathname:this.props.item.handle, query:{id: this.props.item.handle} }}>View</Link>
          :
          <Link to={{ pathname:"edit/"+this.props.item.handle, query:{id: this.props.item.handle} }}>Edit</Link>
          :
          <Link to={{ pathname:"delete/"+this.props.item.handle, query:{id: this.props.item.handle} }}>Delete</Link>
        </td>
      </tr>
    )
  }
}

class HomeListTable extends React.Component {
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
                  <HomeListItem
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

class HomeList extends React.Component {
  constructor() {
    super();
    this.firebaseRef = new Firebase(firebaseURL);
    this.state = {
      items: []
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
      console.log('addItemsFromResponse', 'item', item);
      item.handle = childSnapshot.key();
      items.push(item);
    }.bind(this));
    console.log('addItemsFromResponse', 'items', items);
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
        <HomeListTable items={this.state.items} removeItemFn={this.removeItem} />
      </div>
    )
  }
}

export default HomeList;

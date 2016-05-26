import React from 'react';

const firebaseDatabase = 'testing-2f687';
const firebasetable = 'location';
const firebaseURL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

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
        <HomeListTable items={this.state.items} removeItemFn={this.removeItem} />
      </div>
    )
  }
}

export default HomeList;

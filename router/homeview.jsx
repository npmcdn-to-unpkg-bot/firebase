import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.jsx';

const firebaseDatabase = 'testing-2f687';
const firebasetable = 'location';
const firebaseURL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

class HomeView extends React.Component {
  constructor() {
    super();
    // console.log('constructor', this.props);
    // this.firebaseRef = new Firebase(firebaseURL);
    this.state = {
      item: {}
    };
  }
  componentWillMount() {
    // console.log('componentWillMount', this.props);
    let queryURL = firebaseURL + '/' + this.props.params.id;
    // console.log('componentWillMount', 'URL', queryURL);
    this.firebaseRef = new Firebase(queryURL);
    this.firebaseRef.on('value', this.addItemsFromResponse.bind(this));
  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }
  addItemsFromResponse(dataSnapshot) {
    // This seems like a hard way of getting a single record out
    var item = {};
    dataSnapshot.forEach(function(childSnapshot) {
      let thisKey = childSnapshot.key();
      let thisValue = childSnapshot.val();
      item[thisKey] = thisValue;
    }.bind(this));
    console.log('addItemsFromResponse', 'item', item);
    this.setState({
      item: item
    });
  }
  render() {
    console.log('render', 'state', this.state);
    return (
      <div>
        <h1>View '{this.props.params.id}'</h1>
        <NavBar />
        <div className="row">
          <div className="col-xs-4">Handle</div>
          <div className="col-xs-8">{this.state.item.handle}</div>
        </div>
        <div className="row">
          <div className="col-xs-4">Name</div>
          <div className="col-xs-8">{this.state.item.title}</div>
        </div>
        <div className="row">
          <div className="col-xs-4">Phone</div>
          <div className="col-xs-8">{this.state.item.phone}</div>
        </div>
      </div>
    )
  }
}

export default HomeView;

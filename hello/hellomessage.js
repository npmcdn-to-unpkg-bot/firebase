class HelloMessage extends React.Component {
  defaultProps() {
    name: 'Default'
  }
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
ReactDOM.render(
  <div>
    <HelloMessage name="Name here" />
    <HelloMessage name="Bob" />
    <HelloMessage />
  </div>,
  document.getElementById('hello')
);

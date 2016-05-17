var Ticker = React.createClass({
  getInitialState: function () {
    return JSON.parse(localStorage.getItem('ticker')) || {ticks:0};
  },
  componentDidMount: function () {
    this.interval = setInterval(this._inc, 1000);
  },
  componentWillUnmount: function() {
    this.interval.clearInterval;
  },
  _inc: function() {
    this.setState({
      ticks: this.state.ticks + 1
    });
    localStorage.setItem('ticker', JSON.stringify(this.state));
  },
  render: function () {
    return (
      <button onClick={this._inc}>{this.state.ticks}</button>
    );
  }
});
ReactDOM.render(
    <div>
      <Ticker />
    </div>
    ,
    document.getElementById('app')
);

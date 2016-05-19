import React from 'react';

class HelloWorld extends React.Component {
    propTypes: {
      name: React.PropTypes.string
    },
    getDefaultProps: function() {
      return {
        name: "Default"
      }
    },
    getInitialState: function() {
      return {
        value: 2
      }
    },
    componentDidMount: function() {
        this.setState({
          value: this.state.value + 2
        });
    },
    render: function() {
        return (
          <h1>
            Hello { this.props.name }
          </h1>
        )
    }
});

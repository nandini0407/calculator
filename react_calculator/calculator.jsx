import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0
    };

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="first"
          placeholder="First"
          onChange={ this.update('first') }
          />
        <input
          type="text"
          className="second"
          placeholder="Second"
          onChange={ this.update('second') }
          />
        <input
          type="radio"
          name="operation"
          value="Add"
          />
      </div>
    );
  }
}

export default Calculator;

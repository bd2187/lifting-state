import React, { Component } from "react";

// Conversion Functions
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

// Components
function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water would not boil.</p>
  );
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>{`Enter temperature in ${scaleNames[scale]}:`}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <Calculator />;
  }
}

export default App;

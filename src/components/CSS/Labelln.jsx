import React from 'react';
import "./Labelln.css";

export default class Labelln extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valor: props.texto
    };
  }

  render() {
    return (
      <label className="labelln">
        {this.state.valor} <br/>
      </label>
    );
  }
}
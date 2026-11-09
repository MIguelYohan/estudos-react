import React, { useState } from 'react';
import "./Button.css";

export default function Button({ valor }) {

  const [texto, setTexto] = useState(valor);

  function handleClick() {
    setTexto("Você clicou!");
  }

  return (
    <button onClick={handleClick} className="button">
      {texto}
    </button>
  );
}
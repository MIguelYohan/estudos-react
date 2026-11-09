import React, { useState } from 'react';
import "./Label.css";

export default function Label({ texto }) {

  const [valor, setValor] = useState(texto);

  return (
    <label className="label">
      {valor}
    </label>
  );
}
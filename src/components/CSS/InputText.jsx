import React, { useState } from 'react';
import "./InputText.css";

export default function InputText({ placeholder }) {

  const [valor, setValor] = useState("");
  const [erro, setErro] = useState(false);

  function handleChange(e) {

    const novoValor = e.target.value;

    setValor(novoValor);

    // verifica se está vazio
    setErro(novoValor.trim() === "");
  }

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={handleChange}
        className="inputtext"
      />

      {erro && <p>⚠️ O campo não pode ficar vazio.</p>}
    </>
  );
}
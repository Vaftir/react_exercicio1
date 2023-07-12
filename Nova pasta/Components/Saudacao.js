import { useState } from "react";

function Saudacao({ name }) {
  const [resposta, setResposta] = useState();

  function gerarSaudacao(algumNome) {
    return (
      <div>
        <p>`Olá {algumNome}, tudo bem?`</p>
        <input
          type="text"
          placeholder="Como você está?"
          onChange={(e) => setResposta(e.target.value)}
        />
        {resposta !== "Bem" ? <p>Então ta bom</p> : <p>Bobo</p>}
      </div>
    );
  }
  return <div>{name && <p>{gerarSaudacao(name)}</p>}</div>;
}

export default Saudacao;

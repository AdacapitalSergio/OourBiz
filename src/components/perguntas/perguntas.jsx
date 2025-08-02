import React, { useState } from 'react';
import './estiloPerguntas.css';

const perguntasRespostas = [
  { pergunta: "Pergunta 1", resposta: "Esta é a resposta da pergunta 1." },
  { pergunta: "Pergunta 2", resposta: "Esta é a resposta da pergunta 2." },
  { pergunta: "Pergunta 3", resposta: "Esta é a resposta da pergunta 3." },
  { pergunta: "Pergunta 4", resposta: "Esta é a resposta da pergunta 4." },
  { pergunta: "Pergunta 5", resposta: "Esta é a resposta da pergunta 5." },
];

const Perguntas = () => {
  const [aberta, setAberta] = useState(null);

  const toggle = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <section className="section-perguntas">
      <div className='div-continner-perguntas'>
        <h2 className='h2-perguntas'>Perguntas frequentes</h2>
        {perguntasRespostas.map((item, index) => (
            <div className="div-item-perguntas" key={index}>
            <button className="button-perguntas" onClick={() => toggle(index)}>
                {item.pergunta}
                <span className="seta">{aberta === index ? "▲" : "▼"}</span>
            </button>
            {aberta === index && <div className="div-resposta">{item.resposta}</div>}
            </div>
        ))}
      </div>
    </section>
  );
};

export default Perguntas;

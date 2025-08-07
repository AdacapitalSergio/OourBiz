import React, { useState } from 'react';
import './estiloPerguntas.css';
import { perguntasRespostas } from '../../data/perguntas';

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

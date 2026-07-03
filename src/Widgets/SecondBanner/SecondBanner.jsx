import { useState } from "react";
import "./SecondBanner.css";
import waveTop from "../../assets/wave-top.svg";
import waveBottom from "../../assets/wave-bottom.svg";
import logoPetlove from "../../assets/petlove-logo-transparent.png";


const planos = [
  {  plano:"Leve", descricao:"Cuidado básico", preco:"R$ 14,90/mês" },
  {  plano:"Tranquilo", descricao:"Ambulatorial", preco:"R$ 34,90/mês" },
  {  plano:"Premium", descricao:"Cobertura completa", preco:"R$ 79,90/mês" },
  {  plano:"Total", descricao:"Tudo incluso", preco:"R$ 99,90/mês" },
  {  plano:"Completo", descricao:"Máxima cobertura", preco:"R$ 119,90/mês" },
];

export default function SecondBanner() {
  const [ativo, setAtivo] = useState(1);

  const anterior = () =>
    setAtivo((ativo - 1 + planos.length) % planos.length);

  const proximo = () =>
    setAtivo((ativo + 1) % planos.length);

  const indice = (offset) =>
    (ativo + offset + planos.length) % planos.length;

  const exibidos = [
    planos[indice(-1)],
    planos[indice(0)],
    planos[indice(1)],
  ];

  return (
    <section className="secondBanner">
      <h2>Plano de saúde para cuidar do seu pet</h2>

      <div className="carrossel">
        <button className="seta" onClick={anterior}>&#10094;</button>

        <div className="cards">
          {exibidos.map((card, i) => (
            <div
              key={card.plano}
              className={`card ${i === 1 ? "ativo" : "lateral"}`}
            >
              
              <img
              src={logoPetlove}
              alt="Petlove"
              className="logoCard"
/>
              <h3>{card.plano}</h3>
              <p className="beneficio">
              ⭐{card.descricao}</p>
              <h4>{card.preco}</h4>
              <p className="cidade">
              em São Paulo e região
              </p>
              
              <button>Conferir cobertura</button>
              <a href="#">Contratar</a>
            </div>
          ))}
        </div>

        <button className="seta" onClick={proximo}>&#10095;</button>
      </div>

 <img
        src={waveTop}
        alt=""
        className="waveTop"
    />


<img
        src={waveBottom}
        alt=""
        className="waveBottom"
    />

      <div className="indicadores">
        {planos.map((_, i) => (
          <span key={i} className={i === ativo ? "ativo" : ""} 
          onClick={() => setAtivo(i)}></span>
        ))}
      </div>

      <div className="acoes">
        <button className="secundario">Consultar outra região</button>
        <button className="principal">Ir para Área do Cliente</button>
        <button className="rede">Consultar rede credenciada</button>
      </div>

    </section>
  );
}
import "./Header.css";
import Dropdown from '../../Components/Dropdown';
import React, { useState } from "react";
import logoPetlove from "../../assets/petlove-logo-transparent.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-logo">
        <img
        src={logoPetlove}
        alt="Petlove"
        className="logo-petlove"
  />
        </div>

        <div className="header-cep">
          <svg className="cep-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>Informar CEP</span>
        </div>

        <div className="header-search">
          <input type="text" placeholder="O que seu pet precisa?" />
          <button aria-label="Buscar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="header-action">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.65 6.35A8 8 0 1 0 19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17 3v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Compras recorrentes</span>
        </div>

        <div className="header-action">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>Meus pedidos</span>
        </div>

        <div className="header-cart">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="21" r="1.5" fill="currentColor"/>
            <circle cx="18" cy="21" r="1.5" fill="currentColor"/>
            <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="header-account">
          <span>Entrar | Cadastrar</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

<div className="topCards">

  <div className="topCard destaque">
    <div className="icone">🤝</div>

    <div className="texto">
      <h4>Conheça o Clube Petlove</h4>
      <p>Economize até R$ 300/mês + frete grátis + Stix em dobro + brindes exclusivos</p>
    </div>

    <button>☝</button>
  </div>

<div className="topCard">
    <div className="icone">❤️</div>

    <div className="texto">
      <h4>E os planos de saúde pet?</h4>
      <p>Uma vida mais longa e saudável para o seu pet</p>
    </div>

    <button>☝</button>
  </div>

  <div className="topCard">
    <div className="icone">🎟️</div>

    <div className="texto">
      <h4>Que tal 20% OFF em serviços pro seu pet?</h4>
      <p>Economize em banho, creche, fisioterapia, acupuntura e mais</p>
    </div>

    <button>☝</button>
  </div>

</div>

<div className="menuCategorias">

  <button>Plano de saúde</button>
  <button>Clube Petlove</button>
  <button>Serviços</button>
  <button>Recomendados</button>
  <button>Lojas</button>
  <button>Marcas exclusivas</button>

  <button className="setaCategoria">
    →
  </button>

</div>

      <Dropdown />
    </header>
  );
}

export default Header

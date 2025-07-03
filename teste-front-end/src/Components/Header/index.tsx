import React, { useState } from "react";
import styles from "./Header.module.scss";
import Seguranca from "../../assets/ShieldCheck.png";
import Transporte from "../../assets/Truck.png";
import Cartao from "../../assets/CreditCard.png";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/MagnifyingGlass.svg";
import Vector from "../../assets/Vector.svg";
import Heart from "../../assets/Heart.svg";
import UserCircle from "../../assets/UserCircle.svg";
import ShoppingCart from "../../assets/ShoppingCart.svg";
import Coroa from "../../assets/CrownSimple.svg";

export function Header() {
  const [search, setSearch] = useState("");
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Buscando por:", search);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <ul className={styles.headerTopList}>
          <li className={styles.headerTopListItem}>
            <img
              className={styles.headerTopIcon}
              src={Seguranca}
              alt="Ícone de segurança"
            />
            Compra <span className={styles.headerTopSpanList}>100% segura</span>
          </li>
          <li className={styles.headerTopListItem}>
            <img
              className={styles.headerTopIcon}
              src={Transporte}
              alt="Ícone de transporte"
            />
            <span className={styles.headerTopSpanList}>Frete grátis</span> acima
            de R$ 200
          </li>
          <li className={styles.headerTopListItem}>
            <img
              className={styles.headerTopIcon}
              src={Cartao}
              alt="Ícone de cartão"
            />
            <span className={styles.headerTopSpanList}>Parcele</span> suas
            compras
          </li>
        </ul>
      </div>
      <div className={styles.headerMiddle}>
        <img src={Logo} alt="Logo" />
        <form onSubmit={handleSearch} className={styles.searchBar}>
          <input
            type="text"
            placeholder="O que você está buscando?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <img src={Search} alt="" />
          </button>
        </form>
        <div className={styles.headerMiddleIcon}>
          <ul className={styles.headerMiddleList}>
            <li className={styles.headerMiddleIcon}>
              <img src={Vector} alt="" />
            </li>
            <li className={styles.headerMiddleIcon}>
              <img src={Heart} alt="Ícone de coração" />
            </li>
            <li className={styles.headerMiddleIcon}>
              <img src={UserCircle} alt="Ícone de usuário" />
            </li>
            <li className={styles.headerMiddleIcon}>
              <img src={ShoppingCart} alt="Ícone de carrinho de compras" />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Todas as categorias</li>
            <li className={styles.navItem}>Supermercado</li>
            <li className={styles.navItem}>Livro</li>
            <li className={styles.navItem}>Moda</li>
            <li className={styles.navItem}>Lançamentos</li>
            <li className={`${styles.navItem} ${styles.headerTopSpanList}`}>
              Oferta do dia
            </li>
            <li className={styles.navItem}>
              <img
                className={styles.headerTopIcon}
                src={Coroa}
                alt="Ícone de coroa"
              />
              Assinatura
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

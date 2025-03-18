import React from "react";
import "./styles.sass";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="meu-componente">
          <img src="./src/assets/ShieldCheck.png" alt="Check" />
          <p>
            compra <span>100% segura</span>
          </p>
        </div>
        <div className="meu-componente">
          <img src="../src/assets/Truck.png" alt="Truck" />
          <p>
            <span>frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className="meu-componente">
          <img src="../src/assets/CreditCard.png" alt="Card" />
          <p>
            <span>parcele</span> suas compras
          </p>
        </div>
      </div>
      <div className="container-busca">
        <div className="principal">
          <img src="../src/assets/Logo.png" alt="Logo" />
          <div className="containder-principal">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="search-input"
            />
            <button className="search-button">
              {" "}
              <img src="../src/assets/MagnifyingGlass.png" alt="" />
            </button>
          </div>
          <div className="container-icons">
            <img src="../src/assets/Group.png" alt="Group" />
            <img src="../src/assets/Heart.png" alt="Heart" />
            <img src="../src/assets/UserCircle.png" alt="User" />
            <img src="../src/assets/ShoppingCart.png" alt="Cart" />
          </div>
        </div>
        <div className="container-categorias">
          <a href="">TODAS AS CATEGORIAS</a>
          <a href="">SUPERMERCADO</a>
          <a href="">LIVRO</a>
          <a href="">MODA</a>
          <a href="">LANÇAMENTOS</a>
          <a href="">
            <span>OFERTAS DO DIA</span>
          </a>
          <div className="container-assinatura">
            <img src="../src/assets/CrownSimple.png" alt="Crown" />
            <a href="">ASSINATURA</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

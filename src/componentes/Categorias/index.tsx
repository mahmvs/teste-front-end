import React from "react";
import "./styles.sass";

const Categorias: React.FC = () => {
  return (
    <div className="categorias">
      <div>
        <button className="button-categorias-tech">
          <img src="./src/assets/image.png" alt="" />
        </button>
        <p>Tecnologia</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/supermercados.png" alt="" />
        </button>
        <p>Supermercado</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/whiskey.png" alt="" />
        </button>
        <p>Bebidas</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/ferramentas1.png" alt="" />
        </button>
        <p>Ferramentas</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/cuidados-de-saude.png" alt="" />
        </button>
        <p>Saúde</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/corrida.png" alt="" />
        </button>
        <p>Esportes e Fitness</p>
      </div>
      <div>
        <button className="button-categorias">
          <img src="./src/assets/moda.png" alt="" />
        </button>
        <p>Moda</p>
      </div>
    </div>
  );
};

export default Categorias;

import { Category } from "../Components/Category/Category";
import styles from "./Home.module.scss";
import { Partners } from "../Components/Partners";
import { ProductRelated } from "../Components/ProductRelated";
import { Products } from "../Components/Products";
import { Header } from "../Components/Header";
import { Banner } from "../Components/Banner";
import { Brands } from "../Components/Brands";
import { Footer } from "../Components/Footer";

import TechIcon from "../assets/Tech.svg";
import SupermarketIcon from "../assets/supermercados.svg";
import DrinkIcon from "../assets/whiskey.svg";
import ToolsIcon from "../assets/ferramentas.svg";
import HealthIcon from "../assets/saude.svg";
import FitnessIcon from "../assets/corrida.svg";
import ModaIcon from "../assets/moda.svg";
import { SubCategory } from "../Components/SubCategory";

export function Home() {
  return (
    <>
      <Header />
      <Banner />

      <section className={styles.category}>
        <Category icon={TechIcon} name="Tecnologia" />
        <Category icon={SupermarketIcon} name="Supermercado" />
        <Category icon={DrinkIcon} name="Bebidas" />
        <Category icon={ToolsIcon} name="Ferramentas" />
        <Category icon={HealthIcon} name="Saúde" />
        <Category icon={FitnessIcon} name="Esportes e Fitness " />
        <Category icon={ModaIcon} name="Moda" />
      </section>

      <ProductRelated />
      <SubCategory onSelectSubCategory={(category) => console.log(category)} />

      <div className={styles.relatedProductsContainer}>
        <Products />
      </div>

      <div className={styles.partnersContainer}>
        <Partners />
        <Partners />
      </div>

      <ProductRelated />
      <div className={styles.relatedProductsContainer}>
        <Products />
      </div>

      <div className={styles.partnersContainer}>
        <Partners />
        <Partners />
      </div>

      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Navegue por marcas</h2>
      </div>
      <div className={styles.relatedProductsContainer}>
        <Brands />
        <Brands />
        <Brands />
        <Brands />
        <Brands />
      </div>

      <ProductRelated />
      <div className={styles.relatedProductsContainer}>
        <Products />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

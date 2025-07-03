import { useState } from "react";
import styles from "./Products.module.scss";
import ProductImage from "../../assets/product.png";
import { Modal } from "../../Pages/Modal";

const products = [
  {
    id: 1,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
  {
    id: 2,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
  {
    id: 3,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
  {
    id: 4,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
  {
    id: 5,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
  {
    id: 6,
    image: ProductImage,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    oldPrice: "R$ 300,00",
    price: "R$ 250,00",
    installment: "2x de R$ 125,00",
    shipping: "Frete grátis",
    description:
      "Many desktop publishing packages and web page editors now many desktop publishing",
    detail: "Veja mais detalhes do produto",
  },
];

export function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  function handleBuy(product: (typeof products)[0]) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  function handlePrevious() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }

  return (
    <section className={styles.Products}>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>

        <div className={styles.productsGrid}>
          <div
            className={styles.productsWrapper}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              width: `${(products.length / itemsPerPage) * 100}%`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.oldPrice}>{product.oldPrice}</span>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.installment}>
                  {product.installment}
                </span>
                <span className={styles.shipping}>{product.shipping}</span>
                <button
                  className={styles.button}
                  onClick={() => handleBuy(product)}
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        >
          &#8250;
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
}

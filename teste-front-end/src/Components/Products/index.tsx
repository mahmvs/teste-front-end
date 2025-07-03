import React from 'react';
import styles from './Products.module.scss';
import ProductImage from '../../assets/product.png';
import { ProductRelated } from '../ProductRelated';
const products = [
  {
    id: 1,
    image: ProductImage,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 300,00',
    price: 'R$ 250,00',
    installment: '2x de R$ 125,00',
    shipping: 'Frete grátis',

  },
  
];

export function Products() {
  return (
    <section className={styles.Products}>
      
    
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <span className={styles.productName}>{product.name}</span>
            <span className={styles.oldPrice}>{product.oldPrice}</span>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.installment}>{product.installment}</span>
            <span className={styles.shipping}>{product.shipping}</span>
            <button className={styles.button}>Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

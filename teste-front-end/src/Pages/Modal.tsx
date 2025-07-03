import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    image: string;
    name: string;
    price: string;
    description: string;
    detail: string;
  } | null;
}

export function Modal({ isOpen, onClose, product }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  function handleIncrease() {
    setQuantity(prev => prev + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  return (
      <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <div className={styles.modalHeader}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <h2 className={styles.name}>{product.name}</h2>
          <span className={styles.price}>{product.price}</span>
          <span className={styles.description}>{product.description}</span>
          <span className={styles.detail}>{product.detail}</span>
        </div>
        </div>
        <div className={styles.modalBuySection}>
          <div className={styles.quantityContainer}>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity.toString().padStart(2, '0')}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <div className={styles.buyContainer}>
          <button className={styles.buyButton}>COMPRAR</button>
        </div>
        </div>
      </div>
    </div>
  );
}

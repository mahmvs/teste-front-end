import React from 'react';
import styles from './Category.module.scss';

interface CategoryProps {
  icon: string;
  name: string;
}

export function Category({ icon, name }: CategoryProps) {
  return (
    
    <div className={styles.categoryItem}>
    <div className={styles.categorysub}>
      <img src={icon} alt={`Ícone de ${name}`} />
    </div>
    <p className={styles.categoryText}>{name}</p>
    </div> 
    
  );
}

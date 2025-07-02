import React from 'react';
import styles from './CategoryItem.module.css';

interface CategoryItemProps {
  icon: string;
  label: string;
}

export function CategoryItem({ icon, label }: CategoryItemProps) {
  return (
    <div className={styles.categoryItem}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}
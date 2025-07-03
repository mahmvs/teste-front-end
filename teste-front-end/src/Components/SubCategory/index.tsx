import { useState } from 'react';
import styles from './SubCategory.module.scss';

interface SubCategoryProps {
  onSelectSubCategory: (subCategory: string) => void;
}

export function SubCategory({ onSelectSubCategory }: SubCategoryProps) {
  const [activeSubCategory, setActiveSubCategory] = useState('CELULAR');

  const subCategories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  function handleSubCategoryClick(subCategory: string) {
    setActiveSubCategory(subCategory);
    onSelectSubCategory(subCategory);
  }

  return (
    <div className={styles.subCategoryContainer}>
      {subCategories.map((subCategory) => (
        <button
          key={subCategory}
          className={activeSubCategory === subCategory ? styles.active : ''}
          onClick={() => handleSubCategoryClick(subCategory)}
          type="button" // boa prática para botões que não submetem form
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
}

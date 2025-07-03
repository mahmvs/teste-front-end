import { useState } from 'react';
import styles from './Brands.module.scss';
import Logo2 from '../../assets/logo2.png';


export function Brands () {
 

  return (
    <section className={styles.Brands}>
        <div className={styles.brandsContainer}>
            <img src={Logo2} alt="" />
        </div>
      
    
    </section>
  );
}

import styles from './partners.module.scss';
import Store from '../../assets/store.png';
import Degrade from '../../assets/Degrade2.png';

export function Partners() {
  return (
    <section className={styles.partners}>
      <img src={Store} alt="Banner promocional" className={styles.bannerImage} />
      <img src={Degrade} alt="" className={styles.bannerImageDegrade} />
      <div className={styles.partnersContent}>
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit <br />amet, consectetur</p>
        <button className={styles.partnersButton}>Confira</button>
      </div>
    </section>
  )
}
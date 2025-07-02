import styles from './Banner.module.scss';
import BannerImage from '../../assets/Banner-image.png';
import Degrade from '../../assets/Degrade.png';

export function Banner() {
  return (
    <section className={styles.banner}>
      <img src={BannerImage} alt="Banner promocional" className={styles.bannerImage} />
      <img src={Degrade} alt="" className={styles.bannerImageDegrade} />
      <div className={styles.bannerContent}>
        <h2>Venha conhecer nossas <br />promoções</h2>
        <p><span className={styles.bannerSpan}>50% Off</span> nos produtos</p>
        <button className={styles.bannerButton}>Ver produto</button>
      </div>
    </section>
  )
}
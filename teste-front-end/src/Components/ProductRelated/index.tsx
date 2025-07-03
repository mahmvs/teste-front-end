import styles from "./ProductRelated.module.scss";

export function ProductRelated() {
  return (
    <section className={styles.ProductRelated}>
      <div className={styles.titleContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.title}>Produtos relacionados</h2>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}

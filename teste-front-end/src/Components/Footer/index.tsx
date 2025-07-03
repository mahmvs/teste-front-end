import styles from "./Footer.module.scss";
import Logo from "../../assets/Logo.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";

export function Footer() {
  return (
    <section className={styles.Footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSubContainer}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos <br /> da Econverse.
          </p>
        </div>

        <div className={styles.footerForm}>
          <form>
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Inscrever-se</button>
          </form>
          <label className={styles.footerCheckbox}>
            <input type="checkbox" name="termos" />
            Aceito os termos e condições
          </label>
        </div>
      </div>
      <div className={styles.footerFinal}>
        <div className={styles.footerLogo}>
          <div>
            <img src={Logo} className={styles.logo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>Institucional</h3>
            <p>Sobre Nós</p>
            <p>Movimento</p>
            <p>Trabalhe Conosco</p>
          </div>
          <div>
            <h3>Ajuda</h3>
            <p>Suporte</p>
            <p>Fale Conosco</p>
            <p>Perguntas Frequentes</p>
          </div>
          <div>
            <h3>Termos</h3>
            <p>Termos e Condições</p>
            <p>Política de Privacidade</p>
            <p>Troca e Devolução</p>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>© 2025 Econverse. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}

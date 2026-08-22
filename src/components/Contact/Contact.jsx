import styles from "./Contact.module.css";

const EMAIL = "921charly@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitud de cotización")}&body=${encodeURIComponent("Hola Carlos,\n\nMe gustaría cotizar un proyecto:\n\n- Tipo de proyecto: \n- Descripción: \n- Presupuesto estimado: \n")}`;

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.content}>
                <h2 className={styles.title}>¿Tienes un <span className={styles.gradientText}>proyecto en mente</span>?</h2>
                <p className={styles.description}>Cuéntame de qué se trata y te envío una propuesta sin compromiso.</p>
                <a href={MAILTO} className={styles.ctaLink}>
                    <span>{EMAIL}</span>
                </a>
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/juan-carlos-tzintzun-rodriguez-a99420211/" target="_blank" rel="noopener noreferrer">linkedin.com/in/juan-carlos-tzintzun</a>
                    <a href="https://github.com/charly921" target="_blank" rel="noopener noreferrer">github.com/charly921</a>
                </div>
            </div>
            <div className={styles.footerBar}>
                <span>© 2026 Carlos Tzintzun</span>
            </div>
        </footer>
    );
}

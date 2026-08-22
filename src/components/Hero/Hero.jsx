import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <div className={styles.eyebrow}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.eyebrowIcon}>
                    <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
                </svg>
                Desarrollo web &amp; sistemas ERP
            </div>
            <h1 className={styles.title}>
                Convierto ideas en <span className={styles.gradientText}>software que funciona</span>
            </h1>
            <p className={styles.description}>+5 años construyendo sistemas ERP y aplicaciones web completas, desde el diseño de la base de datos hasta el despliegue en producción.</p>
            <div className={styles.ctaRow}>
                <a href="#contact" className={styles.primaryBtn}>
                    <span>Solicitar cotización</span>
                </a>
                <a href="#projects" className={styles.secondaryBtn}>
                    <span>Ver casos de éxito</span>
                </a>
            </div>
            <div className={styles.trust}>
                <div className={styles.trustLabel}>Empresas donde he construido software</div>
                <div className={styles.trustList}>
                    <span>Bloomingtec</span>
                    <span>Grupo ASR</span>
                    <span>Inomac</span>
                    <span>Didocu</span>
                </div>
            </div>
        </div>
        <div className={styles.photoWrap}>
            <div className={styles.photoGlow}></div>
            <img src={getImageUrl("hero/heroImg.png")} alt="Carlos Tzintzun, desarrollador web" className={styles.heroImg} fetchPriority="high" />
            <div className={styles.availabilityBadge}>
                <span className={styles.dot}></span>
                Disponible para nuevos proyectos
            </div>
        </div>
    </section>;
}

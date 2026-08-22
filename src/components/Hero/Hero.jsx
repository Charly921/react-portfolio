import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Desarrollo aplicaciones web a la medida de tu negocio</h1>
            <p className={styles.description}>+5 años construyendo sistemas ERP y aplicaciones web completas, desde el diseño de la base de datos hasta el despliegue en producción.</p>
            <a
                href="#contact"
                className={styles.contactBtn}>
                <span>Solicitar cotización</span>
            </a>
        </div>
        <img src={getImageUrl("hero/heroImg.png")} alt="Carlos Tzintzun, desarrollador web" className={styles.heroImg} fetchPriority="high"/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}
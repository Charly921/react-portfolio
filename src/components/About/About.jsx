import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container} id='servicios'>
        <h2 className={styles.title}>Servicios</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/aboutImg.png")}
                alt="About image"
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/image1.png")} alt="image1" />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollo Frontend</h3>
                        <p>Construyo sitios y aplicaciones web responsivas, optimizadas y con una experiencia de usuario clara.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/image3.png")} alt="image2" />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollo Backend & APIs</h3>
                        <p>Diseño e implemento APIs y sistemas backend rápidos, seguros y escalables, incluyendo ERPs a la medida.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/image2.png")} alt="image3" />
                    <div className={styles.aboutItemText}>
                        <h3>Administración de Servidores</h3>
                        <p>Configuro, despliego y mantengo la infraestructura de servidores de tu aplicación, asegurando su disponibilidad y seguridad.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}
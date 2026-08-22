import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const EMAIL = "921charly@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitud de cotización")}&body=${encodeURIComponent("Hola Carlos,\n\nMe gustaría cotizar un proyecto:\n\n- Tipo de proyecto: \n- Descripción: \n- Presupuesto estimado: \n")}`;

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>¿Tienes un proyecto en mente?</h2>
                <p>Cuéntame de qué se trata y te envío una propuesta sin compromiso.</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
                    <a href={MAILTO}>{EMAIL}</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/juan-carlos-tzintzun-rodriguez-a99420211/" target="_blank">linkedin.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github icon" />
                    <a href="https://github.com/charly921" target="_blank">github.com</a>
                </li>
            </ul>
        </footer>
    );
}
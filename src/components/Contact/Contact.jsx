import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
                    <a href="mailto:921charly@gmail.com">921charly@gmail.com</a>
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
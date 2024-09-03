import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Carlos</h1>
            <p className={styles.description}>Web developer with over 5 years of experience developing, testing and deploying applications. I enjoy building complete and robust products from start to finish, facing new challenges and continuous learning.</p>
            <a 
                href="mailto:921charly@gmail.com" 
                className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImg.png")} alt="Hero image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}
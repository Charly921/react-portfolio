import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <div className={styles.containerLink}>
            <a className={styles.title} href="/">Portfolio</a>
        </div>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                } 
                alt="menu-button" 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <div className={styles.containerLink}>
                        <a href="#about">About</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#experience">Experience</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#projects">Projects</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#contact">Contact</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>;
};
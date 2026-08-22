import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <div className={styles.containerLink}>
            <a className={styles.title} href="/">Carlos Tzintzun</a>
        </div>
        <div className={styles.menu}>
            <button
                type="button"
                className={styles.menuBtn}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <img
                    src={
                        menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt=""
                />
            </button>
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <div className={styles.containerLink}>
                        <a href="#servicios">Servicios</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#experience">Experiencia</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#projects">Proyectos</a>
                    </div>
                </li>
                <li>
                    <div className={styles.containerLink}>
                        <a href="#contact">Contacto</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>;
};
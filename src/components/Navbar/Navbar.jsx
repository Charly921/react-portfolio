import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Carlos Tzintzun</a>
        <div className={styles.menu}>
            <button
                type="button"
                className={styles.menuBtn}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {menuOpen
                        ? <path d="M6 6l12 12M18 6L6 18" />
                        : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
            </button>
            <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#projects">Casos de Éxito</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <a href="#contact" className={styles.ctaLink}>
                <span>Solicitar cotización</span>
            </a>
        </div>
    </nav>;
};

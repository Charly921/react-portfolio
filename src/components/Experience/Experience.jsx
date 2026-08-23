import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
    return <section className={styles.container} id='experience'>
        <div className={styles.header}>
            <div className={styles.eyebrow}>Stack</div>
            <div className={styles.stack}>
                {skills.map((skill, id) => (
                    <span key={id} className={styles.pill}>{skill.title}</span>
                ))}
            </div>
        </div>

        <div className={styles.header}>
            <div className={styles.eyebrow}>Experiencia</div>
            <h2 className={styles.title}>Trayectoria <span className={styles.gradientText}>profesional</span></h2>
        </div>
        <div className={styles.grid}>
            {history.map((item, id) => (
                <div key={id} className={styles.card}>
                    <div className={styles.date}>{`${item.startDate} — ${item.endDate}`.toUpperCase()}</div>
                    <h3>{`${item.role} · ${item.organization}`}</h3>
                    <p>{item.summary}</p>
                </div>
            ))}
        </div>
    </section>;
}

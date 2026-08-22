import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <div className={styles.eyebrow}>Casos de éxito</div>
                <h2 className={styles.title}>Sistemas ERP <span className={styles.gradientText}>en producción</span></h2>
            </div>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project} />
                        );
                    })
                }
            </div>
        </section>
    );
}

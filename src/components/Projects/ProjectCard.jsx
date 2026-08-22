import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project: { title, description, skills }
    }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <li key={id} className={styles.skill}>{skill}</li>;
                    })
                }
            </ul>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

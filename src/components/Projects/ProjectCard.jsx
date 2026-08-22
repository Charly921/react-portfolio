import PropTypes from "prop-types";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project: { title, imgSrc, description, skills }
    }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imgSrc)} alt={`Imagen de ${title}`} className={styles.image} loading="lazy"/>
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
        imgSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
import styles from "./About.module.css";

const services = [
    {
        title: "Desarrollo Frontend",
        description: "Construyo sitios y aplicaciones web responsivas, optimizadas y con una experiencia de usuario clara.",
        icon: <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />,
    },
    {
        title: "Backend & APIs",
        description: "Diseño e implemento APIs rápidas, seguras y escalables para tus aplicaciones.",
        icon: <>
            <rect x="3" y="4" width="18" height="6" rx="1.5" />
            <rect x="3" y="14" width="18" height="6" rx="1.5" />
            <circle cx="7" cy="7" r="0.6" fill="currentColor" />
            <circle cx="7" cy="17" r="0.6" fill="currentColor" />
        </>,
    },
    {
        title: "ERP a medida",
        description: "Construyo sistemas ERP completos: clientes, proveedores, inventario, ventas y reportes.",
        icon: <>
            <rect x="3" y="3" width="8" height="8" rx="1.2" />
            <rect x="13" y="3" width="8" height="8" rx="1.2" />
            <rect x="3" y="13" width="8" height="8" rx="1.2" />
            <rect x="13" y="13" width="8" height="8" rx="1.2" />
        </>,
    },
    {
        title: "Administración de Servidores",
        description: "Configuro, despliego y mantengo la infraestructura de tu aplicación con disponibilidad y seguridad.",
        icon: <>
            <rect x="4" y="3" width="16" height="5" rx="1" />
            <rect x="4" y="10" width="16" height="5" rx="1" />
            <rect x="4" y="17" width="16" height="4" rx="1" />
            <circle cx="7.5" cy="5.5" r="0.6" fill="currentColor" />
            <circle cx="7.5" cy="12.5" r="0.6" fill="currentColor" />
        </>,
    },
];

export const About = () => {
    return <section className={styles.container} id='servicios'>
        <div className={styles.header}>
            <div className={styles.eyebrow}>Servicios</div>
            <h2 className={styles.title}>Todo lo que necesita tu proyecto, <span className={styles.gradientText}>de principio a fin</span></h2>
        </div>
        <div className={styles.grid}>
            {services.map((service, id) => (
                <div key={id} className={styles.card}>
                    <div className={styles.iconBox}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            {service.icon}
                        </svg>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    </section>;
}

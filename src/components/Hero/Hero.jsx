import styles from "./Hero.module.css";

const codeLines = [
    [{ t: "kw", v: "interface" }, { t: "def", v: " Order " }, { t: "punct", v: "{" }],
    [{ t: "prop", v: "  id" }, { t: "punct", v: ": " }, { t: "def", v: "string" }, { t: "punct", v: ";" }],
    [{ t: "prop", v: "  client" }, { t: "punct", v: ": " }, { t: "def", v: "string" }, { t: "punct", v: ";" }],
    [{ t: "prop", v: "  total" }, { t: "punct", v: ": " }, { t: "def", v: "number" }, { t: "punct", v: ";" }],
    [{ t: "prop", v: "  status" }, { t: "punct", v: ": " }, { t: "str", v: '"pending"' }, { t: "punct", v: " | " }, { t: "str", v: '"paid"' }, { t: "punct", v: ";" }],
    [{ t: "punct", v: "}" }],
    [],
    [{ t: "kw", v: "export async function" }, { t: "def", v: " createOrder" }, { t: "punct", v: "(" }],
    [{ t: "prop", v: "  input" }, { t: "punct", v: ": " }, { t: "def", v: "Omit" }, { t: "punct", v: "<" }, { t: "def", v: "Order" }, { t: "punct", v: ", " }, { t: "str", v: '"id" | "status"' }, { t: "punct", v: ">" }],
    [{ t: "punct", v: ") {" }],
    [{ t: "kw", v: "  const" }, { t: "def", v: " order " }, { t: "punct", v: "= " }, { t: "kw", v: "await" }, { t: "def", v: " db.orders.insert" }, { t: "punct", v: "({" }],
    [{ t: "punct", v: "    ...input," }],
    [{ t: "prop", v: "    status" }, { t: "punct", v: ": " }, { t: "str", v: '"pending"' }, { t: "punct", v: "," }],
    [{ t: "punct", v: "  });" }],
    [],
    [{ t: "kw", v: "  await" }, { t: "def", v: " notifyClient" }, { t: "punct", v: "(order.client);" }],
    [{ t: "kw", v: "  return" }, { t: "def", v: " order;" }],
    [{ t: "punct", v: "}" }],
];

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <div className={styles.eyebrow}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.eyebrowIcon}>
                    <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
                </svg>
                Desarrollo web &amp; sistemas ERP
            </div>
            <h1 className={styles.title}>
                Convierto ideas en <span className={styles.gradientText}>software que funciona</span>
            </h1>
            <p className={styles.description}>+5 años construyendo sistemas ERP y aplicaciones web completas, desde el diseño de la base de datos hasta el despliegue en producción.</p>
            <div className={styles.ctaRow}>
                <a href="#contact" className={styles.primaryBtn}>
                    <span>Solicitar cotización</span>
                </a>
                <a href="#projects" className={styles.secondaryBtn}>
                    <span>Ver casos de éxito</span>
                </a>
            </div>
            <div className={styles.trust}>
                <div className={styles.trustLabel}>Empresas donde he construido software</div>
                <div className={styles.trustList}>
                    <span>Bloomingtec</span>
                    <span>Grupo ASR</span>
                    <span>Inomac</span>
                    <span>Didocu</span>
                </div>
            </div>
        </div>
        <div className={styles.photoWrap}>
            <div className={styles.photoGlow}></div>
            <div className={styles.codeWindow}>
                <div className={styles.codeTitleBar}>
                    <span className={styles.windowDot} style={{ background: "#ff5f57" }}></span>
                    <span className={styles.windowDot} style={{ background: "#febc2e" }}></span>
                    <span className={styles.windowDot} style={{ background: "#28c840" }}></span>
                    <span className={styles.fileName}>orders.service.ts</span>
                </div>
                <div className={styles.codeBody}>
                    {codeLines.map((line, lineIdx) => (
                        <div className={styles.codeLine} key={lineIdx}>
                            <span className={styles.lineNum}>{lineIdx + 1}</span>
                            <span className={styles.codeContent}>
                                {line.map((token, tokenIdx) => (
                                    <span key={tokenIdx} className={styles[token.t]}>{token.v}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.availabilityBadge}>
                <span className={styles.dot}></span>
                Disponible para nuevos proyectos
            </div>
        </div>
    </section>;
}

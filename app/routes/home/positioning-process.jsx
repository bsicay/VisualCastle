import { Section } from '~/components/section';
import styles from './positioning-process.module.css';
import leftImage from '~/assets/positioning.png';

const phases = [
  { id: 'fase-inicial', label: 'fase inicial' },
  { id: 'analisis', label: 'Análisis' },
  { id: 'planificacion', label: 'planificación' },
  { id: 'produccion', label: 'Producción' },
  { id: 'optimizacion', label: 'Optimización' },
];

export function PositioningProcess({ id, sectionRef, ...rest }) {
  const titleId = `${id}-title`;

  return (
    <Section
      id={id}
      as="section"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <div
        aria-hidden
        className={styles.leftImage}
        style={{ '--leftVisual': `url(${leftImage})` }}
      />

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h2 className={styles.titleTop} id={titleId}>
              NUESTRA FUNCIÓN NO ES PUBLICAR
            </h2>
            <p className={styles.titleBottom}>ES POSICIONAR</p>
          </header>

          <div className={styles.copy}>
            <p>Las marcas no crecen por publicar más.</p>
            <p>Crecen cuando su percepción es coherente, profesional y estratégica.</p>
            <p>En Visual Castle estructuramos ese proceso mediante:</p>
          </div>

          <div className={styles.processBlock}>
            <h3 className={styles.processTitle}>CONTINUIDAD CONSTANTE</h3>

            <div className={styles.growthGraph}>
              <svg className={styles.graphLine} viewBox="0 0 360 240" aria-hidden>
                <defs>
                  <marker
                    id="growthArrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
                  </marker>
                </defs>
                <path
                  className={styles.path}
                  d="M24 214 C70 186, 110 160, 160 124 C212 86, 258 56, 334 22"
                  markerEnd="url(#growthArrow)"
                />
              </svg>

              <ol className={styles.phaseList}>
                {phases.map((phase, index) => (
                  <li key={phase.id} className={styles.phase} style={{ '--i': index }}>
                    <span className={styles.dot} aria-hidden />
                    <span className={styles.phaseLabel}>{phase.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from '~/components/section';
import styles from './brand-impact.module.css';
import backgroundImage from '~/assets/background-digital.png';

function VisualConsistencyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="4" width="8" height="7" rx="1.5" />
      <rect x="13" y="4" width="8" height="7" rx="1.5" />
      <rect x="3" y="13" width="8" height="7" rx="1.5" />
      <rect x="13" y="13" width="8" height="7" rx="1.5" />
    </svg>
  );
}

function ProfessionalPerceptionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ValueClarityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M4 12h16" />
      <path d="M4 7h10" />
      <path d="M4 17h7" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
}

function RightAudienceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c.8-3 2.8-4.5 4.5-4.5S11.8 16 12.5 19" />
      <path d="M13 19c.6-2.1 2.2-3.5 3.8-3.5S20.6 16.9 21 19" />
    </svg>
  );
}

const items = [
  {
    id: 'consistency',
    text: 'Coherencia visual en todos los puntos de contacto',
    icon: <VisualConsistencyIcon />,
  },
  {
    id: 'perception',
    text: 'Percepción profesional alineada al nivel de tu negocio',
    icon: <ProfessionalPerceptionIcon />,
  },
  {
    id: 'clarity',
    text: 'Claridad en la propuesta de valor',
    icon: <ValueClarityIcon />,
  },
  {
    id: 'connection',
    text: 'Contenido que conecta con la audiencia correcta',
    icon: <RightAudienceIcon />,
  },
];

export function BrandImpact({ id, sectionRef, ...rest }) {
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
        className={styles.background}
        style={{ '--impactBg': `url(${backgroundImage})` }}
      />

      <div className={styles.content}>
        <h2 className={styles.title} id={titleId}>
          ¿Qué transforma una gestión profesional de marca digital?
        </h2>

        <div className={styles.grid}>
          {items.map(item => (
            <article key={item.id} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <p className={styles.text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

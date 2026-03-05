import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import styles from './problem-statement.module.css';
import katakana from './katakana.svg';

export function ProblemStatement({ id, sectionRef, ...rest }) {
  const { theme } = useTheme();
  const titleId = `${id}-title`;

  return (
    <Section
      id={id}
      as="section"
      ref={sectionRef}
      className={styles.wrapper}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.scene}>
        <div className={styles.topRight}>
          <h2 className={styles.mainTitle} id={titleId}>
            El problema no es publicar. Es posicionar.
          </h2>
          <p className={styles.supportText}>
            Muchas marcas tienen buen producto, pero una percepción digital débil.
          </p>
          <p className={styles.supportText}>Eso limita su crecimiento.</p>
        </div>

        <img
          src={katakana}
          className={styles.logo}
          data-light={theme === 'light'}
          alt=""
          aria-hidden
        />

        <div className={styles.bottomRight}>
          <h2 className={styles.secondTitle}>¿Por qué existe Visual Castle?</h2>
          <p className={styles.secondText}>
            Visual Castle convierte presencia digital en un activo estratégico de marca.
          </p>
        </div>
      </div>
    </Section>
  );
}

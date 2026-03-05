import { Section } from '~/components/section';
import styles from './clients-showcase.module.css';
import logoKimbab from '~/assets/logo-kimbab.png';
import logoHwansanjung from '~/assets/logo-hwansanjung.png';
import logoHwansanjung2 from '~/assets/logo-hwansanjung-2.png';
import logoOh from '~/assets/logo-oh.png';
import logoPunto from '~/assets/logo-punto.png';
import logoSerlblinda from '~/assets/logo-serblinda.png';

const slots = [
  { id: 'client-1', src: logoKimbab, alt: 'Logo Kimbab' },
  { id: 'client-2', src: logoHwansanjung, alt: 'Logo Hwansanjung' },
  { id: 'client-3', src: logoHwansanjung2, alt: 'Logo Hwansanjung 2' },
  { id: 'client-4', src: logoOh, alt: 'Logo OH' },
  { id: 'client-5', src: logoPunto, alt: 'Logo Hwansanjung 2' },
  { id: 'client-6', src: logoSerlblinda, alt: 'Logo Hwansanjung 2' },
];

export function ClientsShowcase({ id, sectionRef, ...rest }) {
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
      <div className={styles.content}>
        <h2 className={styles.title} id={titleId}>
          NUESTROS CLIENTES
        </h2>

        <div className={styles.grid}>
          {slots.map(slot => (
            <div key={slot.id} className={styles.logoSlot}>
              <img className={styles.logoImage} src={slot.src} alt={slot.alt} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

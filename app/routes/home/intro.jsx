import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useScrollToHash } from '~/hooks';
import { cssProps } from '~/utils/style';
import styles from './intro.module.css';
import katakana from './katakana.svg';
import introImage from '~/assets/intro.png';

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  function renderKatakana() {
    return (
      <svg
        aria-hidden
        style={cssProps({ opacity: svgOpacity })}
        className={styles.logoMark}
        data-visible="true"
        viewBox="0 0 579 598"
      >
        <use href={`${katakana}`} />
      </svg>
    );
  }

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in={true} key={theme} timeout={1400}>
        {({ visible, status }) => (
          <>
            <div
              aria-hidden
              className={styles.backgroundImage}
              style={{ '--introImage': `url(${introImage})` }}
            />

            <header className={styles.centered} data-visible="true">
              {renderKatakana()}
              <h1 className={styles.message} id={titleId}>
                Las marcas que no evolucionan visualmente, desaparecen
              </h1>
              <p className={styles.brand}>Visual Castle</p>
            </header>

            <RouterLink
              to="/#project-1"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#project-1"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}

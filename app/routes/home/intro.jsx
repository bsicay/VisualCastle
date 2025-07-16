import React, { useEffect, useState } from 'react';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { useHydrated } from '~/hooks/useHydrated';
import { cssProps, media } from '~/utils/style';
import config from '~/config.json';
import styles from './intro.module.css';
import katakana from './katakana.svg';
import { PlainModel } from '~/components/plainModel';
// Lazy load your custom Model component

import { deviceModels } from '~/components/model/device-models';
// Textures for the model
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [
    disciplines.slice(0, -1).join(', '),
    disciplines.slice(-1)[0]
  ].join(' ');
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const currentDiscipline = disciplines[disciplineIndex];
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  // Rotate disciplines
  useInterval(
    () => setDisciplineIndex(prev => (prev + 1) % disciplines.length),
    5000,
    theme
  );

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        data-device={device}
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
      {isHydrated && <PlainModel />}
      <Transition in={true} key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {/* Katakana Logo */}
            {/* {renderKatakana('laptop', visible)} */}

            {/* 3D Model using custom Model component */}

            {/* Intro Text */}
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text={config.name} delay={500} />
              </h1>
              <Heading level={0} as="h2" className={styles.title}>
                <VisuallyHidden className={styles.label}>
                  {`${config.role} + ${introLabel}`}
                </VisuallyHidden>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    {config.role}
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
                <div className={styles.row}>
                  {disciplines.map(item => (
                    <Transition
                      key={item}
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                    >
                      {({ status: wordStatus, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className={styles.word}
                          data-plus
                          data-status={wordStatus}
                          style={cssProps({ delay: tokens.base.durationL })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
              </Heading>
            </header>

            {/* Scroll Links */}
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
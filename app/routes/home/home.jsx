import { useEffect, useRef, useState } from 'react';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import { BrandImpact } from './brand-impact';
import { ClientsShowcase } from './clients-showcase';
import styles from './home.module.css';
import { Intro } from './intro';
import { PositioningProcess } from './positioning-process';
import { ProblemStatement } from './problem-statement';
import { ProjectSummary } from './project-summary';
import sprMotionVideo from '~/assets/visualIntro.mp4';

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const problemStatement = useRef();
  const brandImpact = useRef();
  const positioningProcess = useRef();
  const clientsShowcase = useRef();
  const projectOne = useRef();

  useEffect(() => {
    const sections = [intro, projectOne]
      .map(section => section.current)
      .filter(section => section instanceof Element);

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            setVisibleSections(prevSections =>
              prevSections.includes(section) ? prevSections : [...prevSections, section]
            );
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    if (intro.current instanceof Element) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, []);

  const project2Views = [
    {
      title: 'Login Screen',
      description: 'Pantalla de login con gradientes y animaciones.',
      rotation: { x: 0, y: 0, z: 0 },
    },
    {
      title: 'Dashboard',
      description: 'Vista del tablero principal con datos en tiempo real.',
      rotation: { x: 0, y: Math.PI / 2, z: 0 }, // rota 90° en Y
    },
    {
      title: 'Perfil',
      description: 'Sección de perfil del usuario.',
      rotation: { x: 0, y: Math.PI, z: 0 }, // rota 180° en Y
    },
    {
      title: 'Ajustes',
      description: 'Opciones y configuraciones avanzadas.',
      rotation: { x: 0, y: -Math.PI / 2, z: 0 }, // rota -90° en Y
    },
  ];

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProblemStatement id="problem-statement" sectionRef={problemStatement} />
      <BrandImpact id="brand-impact" sectionRef={brandImpact} />
      <PositioningProcess id="positioning-process" sectionRef={positioningProcess} />
      <ClientsShowcase id="clients-showcase" sectionRef={clientsShowcase} />

      {/* 
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
        // views={project2Views}
      /> */}
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={false}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
        // views={project2Views}
      /> */}

      <Footer />

      {/* <CastleView /> */}
    </div>
  );
};

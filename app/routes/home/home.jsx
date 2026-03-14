import { useEffect, useRef, useState } from 'react';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import { BrandImpact } from './brand-impact';
import { ClientsShowcase } from './clients-showcase';
import styles from './home.module.css';
import { Intro } from './intro';
import { PositioningProcess } from './positioning-process';
import { ProblemStatement } from './problem-statement';

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
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const problemStatement = useRef();
  const brandImpact = useRef();
  const positioningProcess = useRef();
  const clientsShowcase = useRef();

  useEffect(() => {
    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    if (intro.current instanceof Element) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      indicatorObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.home}>
      <Intro id="intro" sectionRef={intro} scrollIndicatorHidden={scrollIndicatorHidden} />
      <ProblemStatement id="problem-statement" sectionRef={problemStatement} />
      <BrandImpact id="brand-impact" sectionRef={brandImpact} />
      <PositioningProcess id="positioning-process" sectionRef={positioningProcess} />
      <ClientsShowcase id="clients-showcase" sectionRef={clientsShowcase} />

      <Footer />
    </div>
  );
};

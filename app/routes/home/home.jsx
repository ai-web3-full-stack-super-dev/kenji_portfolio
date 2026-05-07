import gamestackTexture2Large from '~/assets/crypto.jpg';
import gamestackTexture2Placeholder from '~/assets/crypto.jpg';
import gamestackTexture2 from '~/assets/crypto.jpg';
import gamestackTextureLarge from '~/assets/LeapBot.jpg';
import gamestackTexturePlaceholder from '~/assets/LeapBot.jpg';
import gamestackTexture from '~/assets/LeapBot.jpg';
import sliceTextureLarge from '~/assets/ai.webp';
import sliceTexturePlaceholder from '~/assets/ai.webp';
import sliceTexture from '~/assets/ai.webp';
import sprTextureLarge from '~/assets/Fullstack development.webp';
import sprTexturePlaceholder from '~/assets/Fullstack development.webp';
import sprTexture from '~/assets/Fullstack development.webp';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
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
    title: 'Software Engineer',
    description: `Software engineer portfolio of ${config.name} — a software engineer working on full-stack development, with a focus on AI and blockchain technologies.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
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
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Full Stack Development"
        description="Full stack development covers both client and server-side work. It combines UI design, backend logic, and database management to build efficient, scalable, and fully functional web applications."
        buttonText="View website"
        buttonLink="https://makrealty.com/"
        model={{
          type: 'laptop',
          alt: 'Full Stack Development',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Blockchain"
        description="Blockchain is a decentralized technology that enables secure and transparent data transactions. It is widely used for building trustless systems, smart contracts, and applications where security, immutability, and decentralization are essential."
        buttonText="View website"
        buttonLink="https://benqi.fi/"
        model={{
          type: 'phone',
          alt: 'Blockchain',
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
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="AI"
        description="Artificial Intelligence focuses on building systems that can learn, analyze data, and make decisions. It includes machine learning, automation, and intelligent features that enhance user experience and enable smarter, data-driven applications."
        buttonText="View website"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'AI',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

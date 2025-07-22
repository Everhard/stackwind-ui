import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        description: (
            <>
                Easily drop StackWind components into any Tailwind project. Just copy, paste, and go — no extra setup required.
            </>
        ),
    },
    {
        title: 'Built for Speed & Style',
        description: (
            <>
                Carefully crafted with clean markup and modern design — save time while shipping sleek UIs.
            </>
        ),
    },
    {
        title: 'Tailwind Native',
        description: (
            <>
                100% utility-first. Every component is built with Tailwind CSS in mind — no external dependencies, just pure flexibility.
            </>
        ),
    },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 mb-3')}>
      <div className="text--center padding-horiz--md border py-6 rounded-lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

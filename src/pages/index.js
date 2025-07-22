import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className="mb-3" src={useBaseUrl('/img/logo-full.svg')} alt="StackWind UI" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="italic">A collection of elegant, responsive, and customizable Tailwind CSS components to build your next project faster.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg mt-5"
            to="/docs/intro">
              Browse Components →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A collection of elegant, responsive, and customizable Tailwind CSS components to build your next project faster">
      <HomepageHeader />
        <main>
        <HomepageFeatures />
        </main>
    </Layout>
  );
}

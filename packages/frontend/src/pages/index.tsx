import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';
import Layout from '@/layouts/Layout';
import {
  Hero, Footer, Nav, CTA, Features, Stats,
} from '@/components/landing';

const Home: NextPageWithLayout = () => (
  <main>
    <div className="max-w-[1400px] w-full mx-auto">
      <Nav />
    </div>
    <div className="max-w-[1240px] w-full mx-auto px-4">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </div>
    <div className="max-w-[1400px] w-full mx-auto">
      <Footer />
    </div>
  </main>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      seo={{
        title: 'Marvel Collector | Trading Site',
        meta: {
          description:
            'Marvel Collector is a trading site trade with other collectors in a all-inclusive community that has a passion for Marvel comics',
        },
      }}
    >
      {page}
    </Layout>
  );
};

export default Home;

import { ReactElement } from 'react';

import type { NextPageWithLayout } from '../_app';
import AuthLayout from '@/layouts/AuthLayout';
import ExploreNav from '@/components/explore/ExploreNav';
import ExploreOffers from '@/components/explore/ExploreOffers';

const Offers: NextPageWithLayout = () => (
  <main className="pt-8 lg:pt-9 px-4 lg:px-7 pb-9 lg:pb-10">
    <ExploreNav />
    <ExploreOffers />
  </main>
);

Offers.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      seo={{
        title: 'Explore | Offers',
        meta: {
          description:
            'View, buy and exchange comic offers from around the world',
        },
      }}
    >
      {page}
    </AuthLayout>
  );
};

export default Offers;

import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '../_app';
import AuthLayout from '@/layouts/AuthLayout';
import ExploreNav from '@/components/explore/ExploreNav';
import ExploreCollectors from '@/components/explore/ExploreCollectors';

const Collectors: NextPageWithLayout = () => (
  <main className="pt-8 lg:pt-9 px-4 lg:px-7 pb-9 lg:pb-10">
    <ExploreNav />
    <ExploreCollectors />
  </main>
);

Collectors.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      seo={{
        title: 'Explore | Collectors',
        meta: {
          description:
            'Get in-contact with Marvel comic book collectors from around the world and trade like never before with the ability to trade anywhere, and anytime',
        },
      }}
    >
      {page}
    </AuthLayout>
  );
};

export default Collectors;

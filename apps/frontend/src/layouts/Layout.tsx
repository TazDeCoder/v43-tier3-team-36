/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AlertPopup from '@/components/common/AlertPopup/AlertPopup';
import { SEO, type SEOProps } from './SEO';
import useBoundStore from '@/store';

type LayoutProps = {
  children: React.ReactNode;
  seo: SEOProps;
};

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const isLoggedIn = useBoundStore((store) => store.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/profile');
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <SEO {...seo} />
      <div className="min-h-screen">
        <AlertPopup />
        {children}
      </div>
    </>
  );
};

export default Layout;

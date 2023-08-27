/* eslint-disable import/extensions */
import Link from 'next/link';

import { Button } from '@/components/ui';
import CTAListItem from './CTAListItem';
import Illustration from '../Illustration';
import Collection from '@/../public/collection.png';

const CTAListData = [
  {
    desc: 'The best comic book varieties',
  },
  {
    desc: 'Distinct offers to suit your taste',
  },
  {
    desc: 'No limits. Connect to the world',
  },
];

const CTA: React.FC = () => (
  <section className="py-14 lg:py-28 flex flex-col md:flex-row gap-10">
    <div className="md:basis-1/2 flex flex-col gap-8">
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold font-dmsans">
          Ready to go next level?
        </h2>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {CTAListData.map((item, index) => (
            <CTAListItem key={`${index + 1}`} desc={item.desc} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        <Link href="signup">
          <Button className="w-full py-2.5 text-sm rounded-full">
            Trade Now
          </Button>
        </Link>
      </div>
    </div>
    <Illustration
      className="md:flex-1"
      source={Collection}
      altText="A collection of comic books"
    />
  </section>
);

export default CTA;

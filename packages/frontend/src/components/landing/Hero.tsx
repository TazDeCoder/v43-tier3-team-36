/* eslint-disable import/extensions */
import Link from 'next/link';
import Illustration from './Illustration';
import { Button } from '../ui';
import HeroImg from '@/../public/hero.png';

const Hero: React.FC = () => (
  <section className="font-dmsans flex flex-col md:flex-row gap-8 lg:gap-12 py-14 lg:py-48">
    <Illustration className="md:flex-1" source={HeroImg} altText="" priority />
    <div className="md:basis-1/2">
      <div className="flex flex-col gap-2">
        <small className="text-sm">The #1 comic marketplace</small>
        <h1 className="text-4xl lg:text-6xl font-bold font-dmsans">
          Trade comics easily
        </h1>
      </div>
      <div className="mt-4 mb-6">
        <p className="text-base lg:text-lg text-textgray">
          Welcome to Marvel Collector, where we take comic trade to a whole new
          level! Our market-place offers to buy, sell and exchange comic books
          from anywhere
        </p>
      </div>
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        <Link href="signup">
          <Button className="w-full py-2.5 text-sm rounded-full">
            Trade Now
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;

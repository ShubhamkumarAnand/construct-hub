import Blogs from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Footers from '@/components/home/Footers';
import Hero from '@/components/home/Hero';
import SimpleGrid from '@/components/home/SimpleGrid';
import Updates from '@/components/home/Updates';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <CTA/>
      <SimpleGrid/>
      <Blogs/>
      <Updates/>
      <Footers/>
    </div>
  );
};

export default Home;

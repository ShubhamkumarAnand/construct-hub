import Blogs from '@/components/home/Blog';
import Features from '@/components/home/Features';
import Footers from '@/components/home/Footers';
import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import SimpleGrid from '@/components/home/SimpleGrid';
import Testimonials from '@/components/home/Testimonials';
import Updates from '@/components/home/Updates';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SimpleGrid />
      <Testimonials />
      <Blogs />
      <Updates />
      <Footers />
    </>
  );
};

export default Home;

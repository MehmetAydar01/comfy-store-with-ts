import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { HeroCarousel } from '.';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime
          laudantium eius natus doloribus perferendis accusantium consequuntur!
          Quisquam dolorem pariatur aut aliquid eveniet numquam, eligendi,
          sapiente.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>
      {/* hero carousel */}
      <HeroCarousel />
    </section>
  );
}

export default Hero;
import Hero from './hero/hero'
import Project from './projects/projects';

export default function Home() {
  return (
    <main className='bg-black bg-cover text-white'>
      <Hero/>
      <Project/>
    </main>
  );
}

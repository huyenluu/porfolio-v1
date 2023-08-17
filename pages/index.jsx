import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Hero from './hero/hero';
import Project from './projects/projects';

export default function Home() {
    return (
        <main className="bg-black bg-cover text-white">
            <Hero />
            <Project />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}

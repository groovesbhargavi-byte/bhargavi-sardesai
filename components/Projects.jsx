import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 text-white flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-4 text-center">Curations & Collaborations</h2>
      <hr className="border-white w-24 mb-12 opacity-30" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* Project 1 */}
        <Link href="/Projects/Shrouds" className="text-center group">
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image src= "/Shrouds.jpeg" alt="Shrouds Project" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Embroidered Shrouds of Modesty (2025)</p>
        </Link>

        {/* Project 2 */}
        <Link href="/Projects/Barbarik" className="text-center group">
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image src= "/barbs.jpg" alt="Barbarik Project" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Barbarik (2021)</p>
        </Link>

        {/* Project 3 */}
        <Link href="/Projects/Shiva" className="text-center group">
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image src= "/shiva.jpg" alt="Shiva Project" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Shiva! The omnipresent..The Omniscient (2021)</p>
        </Link>

        {/* Project 4 */}
        <Link href="/Projects/SolitaryDancer" className="text-center group">
          <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image src= "/solitary.jpg" alt="" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Solitary Dancer (2023)</p>
        </Link>

      </div>
    </section>
  );
}

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Shiva() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black text-white font-light pt-20">
        <div className="px-6 md:px-16 py-16">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4 tracking-wide">
            Shiva! The Omnipresent. The Omniscient.
          </h1>
          <p className="text-center text-lg md:text-xl italic opacity-80 mb-12">
            2021 · Music Video
          </p>

          {/* Description */}
          <div className="text-justify text-base md:text-lg leading-relaxed space-y-6 max-w-5xl mx-auto mb-20">
            <p>
              This work draws inspiration from the <strong>Shiva Tandava Stotram</strong> and the cosmic presence of <strong>Nataraja</strong>, the lord of dance. Shiva embodies both creation and destruction, stillness and movement, compassion, and intensity. He is the formless, eternal principle behind the rhythm of the universe.
            </p>
            <p>
              Through Kathak movement and expressive storytelling, the piece explores Shiva as a symbol of cosmic balance and spiritual power. As Nataraja, he dances upon ignorance, surrounded by fire, representing the cycles of life, transformation, and transcendence.
            </p>
            <p>
              This work offers a reflection on inner stillness in the face of change, inviting the viewer to witness the silence at the heart of movement.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="w-full max-w-4xl mx-auto my-16 aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/i-tkrCATZZI"
              title="Shiva Dance Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Image Gallery: 2 images side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {['shiva', 'shiva1'].map((name) => (
              <div
                key={name}
                className="relative w-full h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src= "/${name}.jpg"
                  alt={`Shiva image ${name}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

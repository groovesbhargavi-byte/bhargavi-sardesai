import Navbar from '@/components/Navbar';

export default function SolitaryDancer() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black text-white font-light pt-20">
        <div className="px-6 md:px-16 py-16">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4 tracking-wide">
            The Solitary Dancer
          </h1>
          <p className="text-center text-lg md:text-xl italic opacity-80 mb-12">
            2023 · Symphony Music
          </p>

          {/* Description */}
          <div className="text-justify text-base md:text-lg leading-relaxed space-y-6 max-w-5xl mx-auto mb-20">
            <p>
              <strong>The Solitary Dancer</strong> by Warren Benson is a solo work performed in collaboration with the Wind Symphony at the Bob Cole Conservatory of Music, CSULB.
            </p>
            <p>
              This piece explores the meeting point of <strong>Kathak</strong> and <strong>Western classical music</strong>, focusing on stillness, spatial tension, and the unique expressive possibilities that arise in live orchestral collaboration.
            </p>
            <p>
              Through Kathak’s polyrhythmic complexity, graceful movement vocabulary, and inherent virtuosity, the work reimagines traditional phrasing in dialogue with Warren Benson’s evocative score.
            </p>
            <p>
              Performing alongside the Wind Symphony offered a rich and challenging terrain—one that demanded deep musical sensitivity, heightened awareness, and a redefinition of rhythm and form within a shared sonic space.
            </p>
            <p>
              <strong>Conductor:</strong> Jermie Arnold<br />
              <strong>Choreographer and Performer:</strong> Bhargavi Sardesai
            </p>
          </div>

          {/* YouTube Video */}
          <div className="w-full max-w-4xl mx-auto my-16 aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
                src="https://www.youtube.com/embed/lt8T7sSISVw"
                title="The Solitary Dancer Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
            </div>

        </div>
      </div>
    </>
  );
}

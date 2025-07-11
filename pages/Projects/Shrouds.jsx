import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Shrouds() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-light">
      <Navbar />
      <div className="px-6 md:px-16 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4 tracking-wide">
          Embroidered Shrouds of Modesty
        </h1>
        <p className="text-center text-lg md:text-xl italic opacity-80 mb-12">
          2025 · Contemporary Kathak
        </p>

        {/* Two-Column Hero Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-24">
          {/* Left: Description */}
          <div className="text-justify text-base md:text-lg leading-relaxed space-y-6">
            <p>
              <strong>Embroidered Shrouds of Modesty (ESOM)</strong> is a contemporary interpretation of the ancient story of Princess Draupadi, a woman wrongfully humiliated in a court full of men. Her experience, drawn from the <em>Mahabharata</em>, continues to resonate as a powerful reminder of how patriarchal systems have misused and exploited power across generations.
            </p>
            <p>
              This work is not just a retelling but an artistic act of resistance. Through a thoughtful blend of classical Kathak movement and contemporary choreographic expression, ESOM explores the emotional and symbolic weight of modesty, dignity, and agency. The body becomes a canvas to reflect both vulnerability and strength, while textiles and gesture become metaphors for what is hidden, revealed, taken, and reclaimed.
            </p>
            <p>
              <strong>Embroidered Shrouds of Modesty</strong> is an invitation to reflect, to remember, and to question. It seeks to bring awareness and provoke dialogue through the language of movement, drawing connections between myth and modernity, between past injustice and present voice.
            </p>
          </div>

          {/* Right: Portrait Image S4 */}
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[600px] rounded-lg overflow-hidden">
              <Image
                src= "/S4.jpg"
                alt="Shroud image 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Concert Video */}
          <div className="w-full max-w-4xl mx-auto my-16 aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://youtu.be/OEsQN8pvvFk"
              title="Embroidered Shrouds of Modesty Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        {/* Final 2-column layout: S1 | S2, S3, S5 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Large Portrait Image (S1) */}
          <div className="relative w-full h-[900px] rounded-lg overflow-hidden">
            <Image
              src= "/S1.jpg"
              alt="Shroud image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: 3 stacked landscape images */}
          <div className="flex flex-col space-y-4">
            {[2, 3, 5].map((num) => (
              <div
                key={num}
                className="relative w-full h-[280px] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/S${num}.jpg`}
                  alt={`Shroud image ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

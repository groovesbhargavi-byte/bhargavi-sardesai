import Image from 'next/image';
import Navbar from '@/components/Navbar';
//import { useRouter } from 'next/router';

export default function Barbarik() {
  //const { basePath } = useRouter();
  return (
    <div className="w-full min-h-screen bg-black text-white font-light">
        <Navbar />
      <div className="px-6 md:px-16 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4 tracking-wide">
          Barbarik
        </h1>
        <p className="text-center text-lg md:text-xl italic opacity-80 mb-12">
          2021 · Dance Film
        </p>

        {/* Two-Column Hero Section: Text + barba.jpg */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-24">
          {/* Left: Description */}
          <div className="text-justify text-base md:text-lg leading-relaxed space-y-6">
            <p>
              This dance film reimagines the story of <strong>Barbarik</strong>, an unsung hero from the <em>Mahabharata</em>, through the lens of Lord Krishna. Deeply rooted in mythology yet told with a contemporary visual language, the piece explores sacrifice, unseen strength, and the moral complexity of war.
            </p>
            <p>
              Blending the intricate rhythm structures of <strong>Kathak</strong> with site-responsive movement, the film unfolds across natural and architectural spaces, creating a dialogue between tradition and environment. The choreography responds to the landscape, while the narrative honors a character often overlooked in mainstream retellings.
            </p>
            <p>
              Premiered at <strong>Sakal Lalit Kalaghar</strong> in Pune, this cross-disciplinary work bridges dance, music, and film to bring a timeless tale into a new light.
            </p>
          </div>

          {/* Right: Portrait Image (barba.jpg) */}
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/barba.jpg"
                alt="Barbarik hero image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Video Embed */}
        <div className="w-full max-w-4xl mx-auto my-16 aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/TZxrqC3NJPA"
            title="Barbarik Dance Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

            {/* Image Layout: B4 | B2 + B3 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left: Portrait B4 (reduced height) */}
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
            src= "/B4.jpg"
            alt="Barbarik image 4"
            fill
            className="object-cover"
            />
        </div>

        {/* Right: Stacked Landscape B2 + B3 */}
        <div className="flex flex-col space-y-4">
            {['B2', 'B3'].map((name) => (
            <div
                key={name}
                className="relative w-full h-[280px] rounded-lg overflow-hidden"
            >
                <Image
                src={`/${name}.jpg`}
                alt={`Barbarik image ${name}`}
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

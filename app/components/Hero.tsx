import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '1905/664' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/wild-bird.webp"
          alt="Wild bird in Amazon rainforest"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Amazon Rainforest
            <span className="block text-green-300">Bird Species</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
            Explore the diverse bird species of the Amazon rainforest and their conservation status. 
            Discover which species are thriving and which face the threat of extinction.
          </p>
        </div>
      </div>
    </section>
  );
}

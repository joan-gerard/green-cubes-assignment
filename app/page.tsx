import ImageGridHero from "./components/ImageGridHero";

export default function Home() {
  return (
    <ImageGridHero>
      {/* Quick Stats Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">
            Conservation Status Overview
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
                150+
              </div>
              <div className="text-sm sm:text-base text-black">
                Species Tracked
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">
                45
              </div>
              <div className="text-sm sm:text-base text-black">
                Near Threatened
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
                23
              </div>
              <div className="text-sm sm:text-base text-black">Vulnerable</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
                12
              </div>
              <div className="text-sm sm:text-base text-black">Endangered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">
            Ready to Explore the Data?
          </h2>
          <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-2xl mx-auto">
            Dive into interactive visualizations and detailed information about
            each bird species, their habitats, and conservation efforts in the
            Amazon rainforest.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base">
            View Interactive Dashboard
          </button>
        </div>
      </section>
    </ImageGridHero>
  );
}


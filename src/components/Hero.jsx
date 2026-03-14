export default function Hero() {
  return (
    <section className="relative bg-indigo-50 mt-18">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center gap-10 py-20">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Welcome to Our Platform
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Build your projects faster, smarter, and beautifully with our tools.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white border border-indigo-500 text-indigo-500 rounded-full hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://via.placeholder.com/500x400.png?text=Hero+Image"
            alt="Hero Illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
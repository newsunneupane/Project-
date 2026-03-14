export default function Features() {
  const features = [
    { title: "Fast Performance", description: "Our platform is optimized for speed.", icon: "⚡" },
    { title: "Secure", description: "Data is protected with encryption.", icon: "🔒" },
    { title: "Customizable", description: "Easily customize your workflow.", icon: "🎨" },
  ];

  return (
    <section className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Features</h2>
        <p className="text-gray-700 mt-4 text-lg">Everything you need to build and grow your projects.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
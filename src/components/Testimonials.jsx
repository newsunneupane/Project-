export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      text: "This platform has completely transformed the way our team works. Super fast and reliable!",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Michael Lee",
      role: "Developer",
      text: "I love how customizable everything is. It’s exactly what I needed for my projects.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Sofia Martinez",
      role: "Designer",
      text: "Beautiful UI and easy-to-use tools. Makes collaboration effortless and fun.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-700 mt-4 text-lg">
          Hear from people who have successfully built their projects with us.
        </p>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 italic">"{t.text}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
              <p className="text-gray-600 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
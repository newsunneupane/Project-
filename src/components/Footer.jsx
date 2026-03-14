export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-2xl font-bold">Logo</h1>
          <p className="text-gray-400 text-sm">
            Build faster and smarter with our platform. Trusted by thousands worldwide.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Careers</a>
          <a href="#" className="hover:text-white transition">Blog</a>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition text-2xl">🌐</a>
            <a href="#" className="hover:text-white transition text-2xl">🐦</a>
            <a href="#" className="hover:text-white transition text-2xl">📘</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white ">

      {/* Logo */}
      <a href="#">
        <h1 className="text-xl font-bold">Logo</h1>
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#hero" className="hover:text-indigo-500">Home</a>
        <a href="#features" className="hover:text-indigo-500">Features</a>
        <a href="#pricing" className="hover:text-indigo-500">Pricing</a>
        <a href="#testimonials" className="hover:text-indigo-500">Testimonials</a>

        {/* Login */}
        <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} flex-col gap-3 absolute top-16 left-0 w-full bg-white shadow-md py-4 px-5 sm:hidden`}
      >
        <a href="#hero" className="py-2 border-b">Home</a>
        <a href="#features" className="py-2 border-b">Features</a>
        <a href="#pricing" className="py-2 border-b">Pricing</a>
        <a href="#testimonials" className="py-2 border-b">Testimonials</a>

        <button className="mt-2 px-6 py-2 bg-indigo-500 text-white rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
}
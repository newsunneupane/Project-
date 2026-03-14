import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  // Show button only after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null; // Don't render until scroll down

  return (
    <a
      href="#hero"
      className="fixed bottom-6 right-6 z-50 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 px-4 py-2 rounded-full shadow-lg transition flex items-center gap-2"
      title="Go to Home"
    >
      🏠 Home
    </a>
  );
}
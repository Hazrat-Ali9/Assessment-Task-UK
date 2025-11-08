"use client";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa6";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// menu function
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = [
    "All",
    "Agency",
    "Creative",
    "Leadership",
    "Grow Marketing",
    "Technology",
  ];

  const agents = Array(12).fill({
    name: "Ayesha Siddiqah",
    role: "Co-founder Leader",
    image:
      "https://img.freepik.com/premium-photo/portrait-corporate-businessman-with-laptop-invest-strategy-finance-growth-financial-success-male-person-ceo-manager-office-planning-data-analysis-economy-analytics-review_590464-180960.jpg?w=360",
  });
  return (
    <div className="font-sans text-gray-800">
      <header className="fixed w-full bg-gradient-to-r from-[#0B0215] to-[#2B0A4A] shadow-md z-50">
      <div className="max-w-7xl mx-auto text-white flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-10 h-10 fill-current text-blue-400"
          >
            <path d="M18 12L6 32l12 20h10L28 32l-8-20zm28 0l12 20-12 20H36L36 32l10-20zM32 32l4-8 4 8-4 8-4-8z" />
          </svg>
        </div>
        <nav className="hidden md:flex space-x-10">
          <a href="#hero" className="hover:text-blue-500 font-semibold">Home</a>
          <a href="#stats" className="hover:text-blue-500 font-semibold">Stats</a>
          <a href="#mission" className="hover:text-blue-500 font-semibold">Mission</a>
          <a href="#agents" className="hover:text-blue-500 font-semibold">Agents</a>
          <a href="#contact" className="hover:text-blue-500 font-semibold">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <FaShoppingCart className="text-gray-50 text-2xl cursor-pointer" />

          <button className="flex items-center gap-2 bg-gradient-to-r from-[#6f3aff] to-[#a362ff] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all">
            <span>✨</span>
            <span className="text-sm">Sign In</span>
          </button>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#140224] text-white px-6 py-4 space-y-4 shadow-xl">
          <a href="#hero" className="block hover:text-blue-400">Home</a>
          <a href="#stats" className="block hover:text-blue-400">Stats</a>
          <a href="#mission" className="block hover:text-blue-400">Mission</a>
          <a href="#agents" className="block hover:text-blue-400">Agents</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>

          <div className="flex items-center gap-3 border-t border-gray-700 pt-4">
            <FaShoppingCart className="text-gray-100 text-xl" />
            <button className="flex items-center gap-2 w-full justify-center bg-gradient-to-r from-[#6f3aff] to-[#a362ff] hover:opacity-90 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all">
              <span>✨</span>
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>

      {/*-----------------  Hero Section -----------------------*/}
      <section className="relative bg-gradient-to-br from-[#0b001a] via-[#12002a] to-[#1c0033] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-screen">
        {/* LEFT CONTENT */}
        <div className="max-w-xl md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Unveiling the Essence <br /> Of Our Metro Solver
          </h1>

          <p className="text-base text-gray-300 leading-relaxed">
            Welcome to Metro Solver, where creativity meets strategy, and brands
            come to life. We are not just a branding agency; we are architects
            of identity, storytellers of success, and partners in your brand's
            journey. Metro Solver is a hub of innovative minds, passionate about
            turning concepts into captivating brand experiences.
          </p>

          <p className="text-base text-gray-300 leading-relaxed">
            At Path our overarching goal is to redefine industry standards by
            providing a dynamic and adaptive HR and CRM SaaS platform. We aim to
            empower businesses of all sizes to optimise their operations, foster
            employee growth, and cultivate enduring customer relationships.
          </p>

          <button className="mt-8 flex items-center gap-2 bg-gradient-to-r from-[#6f3aff] to-[#a362ff] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            <span className="text-lg">✨</span> Book Now
          </button>
        </div>

        {/* RIGHT IMAGE WITH BORDER EFFECT */}
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
          {/* Border (behind image, only visible top & right) */}
          <div className="absolute top-[-15px] right-[125px] w-[65%] h-[90%] border-2 border-gray-400/60 rounded-3xl z-0"></div>

          {/* Image */}
          <img
            src="https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg"
            alt="Team working on analytics"
            className="relative z-10 rounded-3xl object-cover w-[65%] shadow-2xl"
          />
        </div>
      </section>

      {/*---------------------- Stats Card Section ------------------*/}
      <section
        id="stats"
        className="bg-gradient-to-r from-[#0B0215] to-[#2B0A4A] py-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div className="bg-gradient-to-r from-[#200a37] to-[#2B0A4A] p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-white">150+</h2>
            <p className="mt-2 text-white">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-r from-[#200a37] to-[#2B0A4A] p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-white">25k+</h2>
            <p className="mt-2 text-white">Happy Clients</p>
          </div>
          <div className="bg-gradient-to-r from-[#200a37] to-[#2B0A4A] p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-white">90+</h2>
            <p className="mt-2 text-white">Global Partners</p>
          </div>
        </div>
      </section>

      {/*------------------------ Mission & Story Section -------------- */}
      <section className="relative bg-gradient-to-r from-[#0B0215] to-[#2B0A4A] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden min-h-screen">
        <div className="relative md:w-1/2 flex justify-center">
          <div className="absolute top-[-15px] left-[90px] w-[65%] h-[90%]  border-2 border-purple-400/50 rounded-3xl z-0"></div>
          <img
            src="https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg"
            alt="Team collaborating on strategy"
            className="relative z-10 rounded-3xl object-cover w-[65%] shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <div className="bg-[#1a0b2b]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Metro Solver Mission</h2>
            <p className="text-gray-300 leading-relaxed text-md">
              Our mission is to cover all your digital needs by providing
              innovative, comprehensive, and affordable solutions that meet your
              specific requirements and exceed your expectations. We are
              dedicated to delivering top-quality services that empower
              businesses to succeed in a competitive digital landscape.
            </p>
          </div>
          <div className="bg-[#1a0b2b]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Metro Solver Story</h2>
            <p className="text-gray-300 leading-relaxed text-md">
              In July 2023, a vision took shape that would redefine the
              landscape of digital services. This vision came from Nayemul
              Karim, the founder and director of Metro Solver.They encountered a
              digital services market that was not only exorbitantly expensive
              but also lacked a comprehensive, all-in-one solution...
              <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* ------------------------- Vision & Conclusion Section --------------  */}

      <section className="relative bg-gradient-to-r from-[#0B0215] to-[#2B0A4A] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden min-h-screen">
        <div className="md:w-1/2 flex flex-col">
          <div className="bg-[#1a0b2b]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Global Reach And Vision</h2>
            <p className="text-gray-300 leading-relaxed text-md">
              Our mission is to cover all your digital needs by providing
              innovative, comprehensive, and affordable solutions that meet your
              specific requirements and exceed your expectations. We are
              dedicated to delivering top-quality services that empower
              businesses to succeed in a competitive digital landscape.
            </p>
          </div>
          <div className="bg-[#1a0b2b]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed text-md">
              In July 2023, a vision took shape that would redefine the
              landscape of digital services. This vision came from Nayemul
              Karim, the founder and director of Metro Solver.They encountered a
              digital services market that was not only exorbitantly.
            </p>
          </div>
        </div>
        <div className="relative md:w-1/2 flex justify-center">
          <div className="absolute top-[-15px] left-[90px] w-[65%] h-[90%]  border-2 border-purple-400/50 rounded-3xl z-0"></div>
          <img
            src="https://images.stockcake.com/public/f/0/6/f06df0a9-588c-45b3-b670-92b498d9b7a1_large/group-study-session-stockcake.jpg"
            alt="Team collaborating on strategy"
            className="relative z-10 rounded-3xl object-cover w-[65%] shadow-2xl"
          />
        </div>
      </section>

      {/*------------------- Agent Section -------------------- */}

      <section className="bg-gradient-to-br from-[#0b001a] via-[#12002a] to-[#1c0033] text-white py-20 px-6 md:px-20 flex flex-col items-center">
        <section className="bg-gradient-to-r from-[#200a37] to-[#2B0A4A] text-white py-20 px-6 md:px-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
            Meet Our Agents
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  category === "All"
                    ? "bg-gradient-to-r from-[#6f3aff] to-[#a362ff] text-white"
                    : "bg-[#1a0b2b]/60 text-gray-300 hover:bg-[#2a1144]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {agents.map((agent, i) => (
              <div
                key={i}
                className="relative bg-[#1a0b2b]/60 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute bottom-12 left-24 -translate-x-1/2 translate-y-1/4 w-[80%] bg-gradient-to-br from-[#0b001a] via-[#12002a] to-[#1c0033] px-4 py-2 flex items-center justify-between shadow-lg rounded-tr-2xl rounded-br-2xl">
                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {agent.name}
                    </h3>
                    <p className="text-white text-xs">{agent.role}</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#6f3aff] to-[#a362ff] p-2 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-gradient-to-r from-[#3c2183] to-[#0e0916] hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all">
            View More
          </button>
        </section>
      </section>

      {/*-------------------------- Contact Section ----------------- */}

      <section className="min-h-screen bg-gradient-to-b from-[#180024] via-[#22003a] to-[#1c012f] flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-b from-[#1a022d] to-[#0e001a] rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-20 h-20 text-blue-400 fill-current"
              >
                <path d="M18 12L6 32l12 20h10L28 32l-8-20zm28 0l12 20-12 20H36L36 32l10-20zM32 32l4-8 4 8-4 8-4-8z" />
              </svg>
            </div>
            <h2 className="text-white text-4xl font-semibold leading-snug mb-8">
              Still Have <br /> A Questions?
            </h2>
            <div className="flex gap-4 justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaXTwitter />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f0b2f] hover:bg-[#2a0f42] text-[#8a5cf6] text-lg transition">
                <FaTiktok />
              </div>
            </div>
          </div>
          <div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name…"
                  className="w-full rounded-lg bg-transparent border border-[#7e56ff] px-4 py-3 text-white focus:outline-none focus:border-[#b285ff]"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your name…"
                  className="w-full rounded-lg bg-transparent border border-[#7e56ff] px-4 py-3 text-white focus:outline-none focus:border-[#b285ff]"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2">
                  WhatsApp/Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your number…"
                  className="w-full rounded-lg bg-transparent border border-[#7e56ff] px-4 py-3 text-white focus:outline-none focus:border-[#b285ff]"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-2">
                  Which are You Looking for Support in?
                </label>
                <select className="w-full rounded-lg bg-transparent border border-[#7e56ff] px-4 py-3 text-white focus:outline-none focus:border-[#b285ff]">
                  <option className="text-black">Choose services</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-white mb-2">
                  How Can We Help?
                </label>
                <textarea
                  placeholder="Message goes in here…"
                  className="w-full rounded-lg bg-transparent border border-[#7e56ff] px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-[#b285ff]"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-[#351b59] to-[#3c0e6d] hover:opacity-90 transition"
                >
                  <span className="text-xl">✨</span> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#150025] via-[#1d0035] to-[#0f001d] text-white py-16 px-6 md:px-20">
        {/*------------------------------- Newsletter Section ---------------------- */}
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-14 h-14 text-blue-400 fill-current mb-3"
            >
              <path d="M18 12L6 32l12 20h10L28 32l-8-20zm28 0l12 20-12 20H36L36 32l10-20zM32 32l4-8 4 8-4 8-4-8z" />
            </svg>
            <h2 className="text-2xl font-bold tracking-wide">METRO SOLVER</h2>
            <p className="text-sm text-gray-300">your it partner</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <div className="w-full md:w-[40%] rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Join the 25000+ clients in our company
              </p>
            </div>
            <div className="w-full md:w-[50%] flex bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_#7c3aed]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-[#6a00ff] to-[#a046ff] px-6 py-3 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_#8b5cf6] whitespace-nowrap">
                ✨ Subscribe
              </button>
            </div>
          </div>
        </div>

        {/*---------------------------- Footer Section ---------------------- */}
        <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Got Questions?
              <br />
              Call us !
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-[#9d72ff] mt-1" />
                <span>
                  Head office: Metro Solver Limited
                  <br />
                  Grantham Road, London E12 5LX, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#9d72ff]" /> +447936 455446
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#9d72ff]" />{" "}
                official@metrosolver.com
              </li>
            </ul>
            <div className="mt-6">
              <label className="block text-gray-400 text-sm mb-2">
                Country Currency
              </label>
              <select className="w-full md:w-[80%] bg-[#1f0f33] border border-[#7e56ff] rounded-lg px-3 py-2 text-white focus:outline-none">
                <option className="text-black">GBP - British Pound</option>
              </select>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About us</li>
              <li>User Profile</li>
              <li>White Labelling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Our Stories</li>
              <li>Career</li>
              <li>Send Message</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Start Earning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Digital Marketing</li>
              <li>Creative Writing Solution</li>
              <li>Web & Software Development</li>
              <li>E-Commerce Solution</li>
              <li>Graphic Design</li>
              <li>Multimedia & Video Editing</li>
              <li>Merchandise</li>
              <li>Premium Website</li>
              <li>Premium Domains</li>
              <li>Special Combo</li>
            </ul>
          </div>
        </footer>
        <div className="max-w-7xl mx-auto mt-10 text-center text-gray-400 text-sm pt-6 flex justify-between items-center gap-4">
          <p>© Metro Solver. All Rights Reserved 2024</p>
          <p className="mt-2">
            Metro Solver Ltd incorporated in England & Wales Registration
            No:15792819
          </p>
        </div>
      </section>
    </div>
  );
}

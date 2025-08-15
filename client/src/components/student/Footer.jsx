import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // You can wire this up to your backend later
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* subtle top glow */}
      <div
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Top section: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img
              src={assets.logo_dark}
              alt="Education Platform Logo"
              className="h-9 mb-5 drop-shadow"
            />
            <p className="text-gray-300/90 text-sm leading-relaxed max-w-md">
              Transform your learning journey with our comprehensive education
              platform. Access quality courses, expert instructors, and
              interactive learning experiences.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: assets.facebook_icon, label: "Facebook" },
                { icon: assets.twitter_icon, label: "Twitter" },
                { icon: assets.instagram_icon, label: "Instagram" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={s.label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="h-5 w-5 opacity-90 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-gray-300/80">
                Get the latest courses, tips, and updates delivered to your
                inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 rounded-xl bg-white/10 placeholder:text-gray-400 text-sm px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400/60"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/courses-list")}
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Courses
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white/95 transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-6">
            <h4 className="text-sm font-semibold tracking-wide text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="text-gray-400">Email:</span>{" "}
                support@presync.tech
              </li>
              <li>
                <span className="text-gray-400">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-400/80">
                We typically reply within 24 hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Presync.tech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors text-sm"
              >
                Cookies
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-300/90 hover:text-white text-sm underline-offset-4 hover:underline"
                aria-label="Back to top"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

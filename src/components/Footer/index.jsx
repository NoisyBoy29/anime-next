import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "700",
});

export default function Footer() {
  return (
    <footer className="py-8 text-color-dark bg-color-secondary">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full text-center md:w-auto md:text-left">
          <Image
            src="/assets/header-logo.png"
            alt="Header Logo"
            width={200}
            height={20}
            className="mx-auto md:mx-0"
          />
          <p className="mt-2 text-sm text-gray-400">
            Your go-to platform for anime updates and reviews. As part of
            multimedia system project
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-color-orange">
                Home
              </Link>
            </li>
            <li>
              <Link href="/populer" className="hover:text-color-orange">
                Popular
              </Link>
            </li>
            <li>
              <Link href="/ongoing" className="hover:text-color-orange">
                Ongoing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-color-orange">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mywebsite.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Anime St, Tokyo, Japan</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} ANIMENEXT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

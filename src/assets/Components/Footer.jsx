import React from "react";
import linkedinIcon from "../images/Linkedin_logo.png";
import githubIcon from "../images/github-11-xxl.png";
import instagramIcon from "../images/instagram-white-icon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-black via-black to-cyan-700 w-full text-white">
      <footer className="flex flex-col items-center py-10 px-4 space-y-6">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg font-medium">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/vidushi-chaudhary-b032b4282/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:scale-110 transition-transform"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/VidushiChaudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:scale-110 transition-transform"
          >
            <img src={githubIcon} alt="GitHub" className="h-7 w-7" />
          </a>
          <a
            href="https://www.instagram.com/vidushichaudhary064?utm_source=qr&igsh=MXZlNzB3bjNzMjF6ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:scale-110 transition-transform"
          >
            <img src={instagramIcon} alt="Instagram" className="h-7 w-7" />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="w-4/5 border-gray-500" />

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base font-semibold">
          <p>&copy; 2025 Vidushi Chaudhary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;




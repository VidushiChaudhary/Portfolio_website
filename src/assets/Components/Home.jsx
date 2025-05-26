import React from "react";
import Image from '../images/Home.png';
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
// <-- make sure CSS for animation is imported

function Home() {
    const handleDownloadCV = () => {
        window.open('/VidushiChaudhary3.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="md:mt-20 mt-16 "> {/* Responsive padding */}
            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center justify-around text-center md:text-left space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <p className="text-xl md:text-3xl text-white">Hi!, My name is</p>
                    <p className="text-2xl md:text-6xl font-bold text-white">Vidushi Chaudhary</p>
                    <p className="text-xl md:text-3xl text-white">
                        And I'm a{" "}
                        <span className="text-yellow-400 text-2xl md:text-4xl font-bold typing inline-block">
                            Web Developer
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 pt-4">
                        <button className="rounded-sm text-lg sm:text-xl h-10 px-6 text-white bg-cyan-700 shadow-sm shadow-amber-300">
                            Hire me
                        </button>
                        <button
                            onClick={handleDownloadCV}
                            className="rounded-sm text-lg sm:text-xl h-10 px-6 text-white bg-cyan-700 shadow-sm shadow-amber-300"
                        >
                            Download CV
                        </button>
                        <button className="rounded-sm text-lg sm:text-xl h-10 px-6 text-white bg-cyan-700 shadow-sm shadow-amber-300">
                            <a href="https://github.com/VidushiChaudhary" target="_blank" rel="noopener noreferrer">
                            Github
                            </a>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={Image}
                        alt="home"
                        className="w-50 h-50 sm:w-63 sm:h-63 lg:w-74 lg:h-74 rounded-full object-cover  shadow-lg"
                    />
                </div>
            </div>

            {/* Other Sections */}
            <About/>
            <Education />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;





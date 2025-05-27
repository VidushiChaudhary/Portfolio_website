import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use any icon library


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-black-900   to-cyan-700">
            <div className="flex items-center justify-between px-5 h-14">
                <p className="text-3xl text-white font-bold italic">Portfolio</p>
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="hidden md:flex gap-5 text-lg italic text-white w-1/2.5">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/skill">Skills</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contact</Link>
                    
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col gap-3 px-5 pb-4 md:hidden italic text-white bg-white/5 text-lg">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/skill" onClick={() => setIsOpen(false)}>Education</Link>
                    <Link to="/project" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="/education" onClick={() => setIsOpen(false)}>Project</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;


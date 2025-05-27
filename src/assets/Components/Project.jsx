import React from "react";
import AlarmClockImg from '../images/alramclock.png';
import Car from '../images/Screenshot (786).png';
import Todo from '../images/WhatsApp Video 2025-04-26 at 1.02.51 AM.mp4';
import PaintAppImg from '../images/Paint_BrushSize.webp';
import GrocerySiteImg from '../images/Screenshot (793).png';
import ReactLandingImg from '../images/Screenshot (834).png';

function Project() {
    return (
        <div className="px-4 py-12">
            <div className="text-5xl md:text-6xl font-semibold text-white text-center italic mb-12">Projects --</div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                
                {/* 1st Project */}
                <div className="w-full max-w-sm min-h-[550px]  bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">Independence Day Animation Project</p>
                    <img src={Car} alt="project" className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">HTML</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">CSS</button>
                    </div>
                    <p className="text-lg text-white  mb-4">Created a fully Independence Day-themed webpage.</p>
                    <div className="flex justify-center">
                        <a href="https://rawcdn.githack.com/VidushiChaudhary/Paint_App/aac045bd949ab8376e99ac55824cb160cee04b12/index.html" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-700 cursor-pointer ">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

                {/* 2nd Project */}
                <div className="w-full max-w-sm min-h-[550px] bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">To-Do List</p>
                    <video src={Todo} muted autoPlay loop className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">HTML</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">CSS</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">JavaScript</button>
                    </div>
                    <p className="text-lg text-white  mb-4">Built an interactive To-Do List with add, delete, and mark as completed functionality.</p>
                    <div className="flex justify-center">
                        <a href="https://rawcdn.githack.com/VidushiChaudhary/Bootstrap_Project-using-html/8e58df00a7d1b05b08213d704a71121c2abd7acc/index.html" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-600 cursor-pointer ">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

                {/* 3rd Project */}
                <div className="w-full max-w-sm min-h-[550px] bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">Alarm Clock</p>
                    <img src={AlarmClockImg} alt="project" className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">HTML</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">CSS</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">JavaScript</button>
                    </div>
                    <p className="text-lg text-white  mb-4">Built a dynamic Alarm Clock with real-time time display and multiple alarm support.</p>
                    <div className="flex justify-center">
                        <a href="https://rawcdn.githack.com/VidushiChaudhary/Bootstrap_Project-using-html/8e58df00a7d1b05b08213d704a71121c2abd7acc/index.html" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-600  cursor-pointer">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

                {/* 4th Project */}
                <div className="w-full max-w-sm min-h-[550px]  bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">Paint Application</p>
                    <img src={PaintAppImg} alt="project" className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">HTML</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600 text-white">CSS</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">JavaScript</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">Canvas API</button>
                    </div>
                    <p className="text-lg text-white  mb-4">Developed a web-based Paint Clone using the Canvas API for real-time drawing.</p>
                    <div className="flex justify-center">
                        <a href="https://rawcdn.githack.com/VidushiChaudhary/Paint_App/aac045bd949ab8376e99ac55824cb160cee04b12/index.html" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-600 cursor-pointer">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

                {/* 5th Project */}
                <div className="w-full max-w-sm min-h-[550px] bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">E-commerce Grocery Website</p>
                    <img src={GrocerySiteImg} alt="project" className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">HTML</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">CSS</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">Bootstrap</button>
                    </div>
                    <p className="text-lg text-white  mb-4">A responsive e-commerce website designed for online grocery shopping.</p>
                    <div className="flex justify-center">
                        <a href="https://rawcdn.githack.com/VidushiChaudhary/Bootstrap_Project-using-html/8e58df00a7d1b05b08213d704a71121c2abd7acc/index.html" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-600 cursor-pointer ">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

                {/* 6th Project */}
                <div className="w-full max-w-sm min-h-[550px] bg-white/5 border-2 rounded-lg p-4 shadow-md shadow-cyan-600 flex flex-col justify-between">
                    <p className="text-2xl font-semibold text-white text-center mb-4">Landing Page Using React</p>
                    <img src={ReactLandingImg} alt="project" className="h-40 w-full object-cover rounded mb-4" />
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">React.js</button>
                        <button className="rounded-md px-4 py-1 bg-cyan-600  text-white">Tailwind CSS</button>
                    </div>
                    <p className="text-lg text-white  mb-4">Built a simple and clean Landing Page using React.js, featuring a navigation bar.</p>
                    <div className="flex justify-center">
                        <a href="https://react-landingpage-gray.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className="rounded-md text-white text-lg h-10 w-52 bg-cyan-600 cursor-pointer ">Click Here for Demo</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;



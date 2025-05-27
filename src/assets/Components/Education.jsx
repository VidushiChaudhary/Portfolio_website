import React from "react";

function Education() {
    return (
        <div className="px-4 py-15">
            {/* Education Heading */}
            <h2 className="text-white font-semibold italic text-5xl md:text-6xl text-center mb-8">
                Education --
            </h2>

            {/* Education Timeline */}
            <div className="flex justify-center">
                <div className="relative border-l-4 border-cyan-700 pl-6 max-w-xl w-full">
                    {/* Entry 1 */}
                    <div className="mb-8 relative">
                        <div className="absolute -left-8.5 top-1 w-4 h-4 bg-cyan-700 rounded-full"></div>
                        <div className="text-lg p-4 shadow-md hover:shadow-lg shadow-cyan-700 rounded-sm  text-white bg-white/5">
                            <p className="font-semibold">Moradabad Institute of Technology, Moradabad</p>
                            <p>Bachelor of Technology, Computer Science and Engineering</p>
                            <p className="text-sm text-cyan-400">Oct 2021 - Sep 2024</p>
                        </div>
                    </div>

                    {/* Entry 2 */}
                    <div className="mb-8 relative">
                        <div className="absolute -left-8.5 top-1 w-4 h-4 bg-cyan-700 rounded-full"></div>
                        <div className="text-lg p-4 shadow-md hover:shadow-lg shadow-cyan-700 rounded-sm  text-white bg-white/5">
                            <p className="font-semibold">Government Girls Polytechnic, Moradabad</p>
                            <p>Polytechnic Diploma - Diploma, Computer Science and Engineering</p>
                            <p className="text-sm text-cyan-400">Oct 2018 - Sep 2021</p>
                        </div>
                    </div>

                    {/* Entry 3 */}
                    <div className="mb-8 relative">
                        <div className="absolute -left-8.5 top-1 w-4 h-4 bg-cyan-700 rounded-full"></div>
                        <div className="text-lg p-4 shadow-md hover:shadow-lg shadow-cyan-700  rounded-sm text-white bg-white/5">
                            <p className="font-semibold">Sri Sai Vidya Kanya Inter College, Moradabad</p>
                            <p>Intermediate</p>
                            <p className="text-sm text-cyan-400">Oct 2017 - Sep 2018</p>
                        </div>
                    </div>

                    {/* Entry 4 */}
                    <div className="relative">
                        <div className="absolute -left-8.5 top-1 w-4 h-4 bg-cyan-700 rounded-full"></div>
                        <div className="text-lg p-4 shadow-md hover:shadow-lg shadow-cyan-700  rounded-sm text-white bg-white/5">
                            <p className="font-semibold">Sri Sai Vidya Kanya Inter College, Moradabad</p>
                            <p>High School</p>
                            <p className="text-sm text-cyan-400">Oct 2015 - Sep 2016</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Heading */}
            <h2 className="text-white font-semibold text-3xl md:text-4xl text-center italic mt-20 mb-8">
                Experience
            </h2>

            {/* Experience Timeline */}
            <div className="flex justify-center">
                <div className="relative border-l-4 border-cyan-700 pl-6 max-w-xl w-full">
                    {/* Experience Entry */}
                    <div className="mb-8 relative">
                        <div className="absolute -left-8.5 top-1 w-4 h-4 bg-cyan-700 rounded-full"></div>
                        <div className="text-lg p-4 shadow-md hover:shadow-lg shadow-cyan-700 rounded-sm  text-white bg-white/5">
                            <p className="font-semibold">MERN Full Stack Trainee</p>
                            <p>Cetpa Infotech Pvt. Ltd, Noida</p>
                            <p className="text-sm text-cyan-400">Dec 2024 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;


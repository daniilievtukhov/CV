import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";

const Work = () => {
    return (
        <>
            <section className="section" id="work">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-x-10">
                        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                            {/*text*/}
                            <div>
                                <h2 className="h2 leading-tight text-accent">
                                    My Latest <br /> Work
                                </h2>
                                <p className="max-w-sm mb-16">
                                    After writing the assignments and passing
                                    the test, I was accepted into the team,
                                    where we developed the project for 4 months.
                                    On that courses from SoftServe, we have
                                    learned the technology of React.JS and
                                    methodology of Scrum. Finally, we
                                    represented the social media "Proved Code",
                                    which is similar to LinkedIn. As we were
                                    told, this course is completely reminiscent
                                    of an internship. We worked from February to
                                    June.
                                </p>
                                <button className="btn btn-sm">
                                    <a href="https://github.com/ProvedCode">
                                        View the project
                                    </a>
                                </button>
                            </div>
                            {/*image*/}
                        </div>
                        <div className="flex-1">
                            {" "}
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                                {/*overlay*/}
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translation-all duration-300"></div>
                                {/*img*/}
                                <img
                                    className="group-hover:scale-125 translation-all duration-500"
                                    src={Img1}
                                    alt=""
                                />
                                {/*oretitle*/}
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-gradient">
                                        Front-end developing
                                    </span>
                                </div>
                                {/*title*/}
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                    <span className="text-3xl text-white">
                                        ProvedCode
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import CV_PDF from "../assets/CV_Daniil_Yevtukhov.pdf";
const About = () => {
    const { ref, inView } = useInView({
        thresold: 0.5,
    });

    const handleDownloadPDF = () => {
        window.open(CV_PDF, "_self");
    };
    return (
        <>
            <section className="section" id="about" ref={ref}>
                <div className="container mx-auto">
                    <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                        {/*img*/}
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
                        ></motion.div>
                        {/*text*/}
                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex-1"
                        >
                            <h2 className="h2 text-accent">Summary.</h2>
                            <h3 className="h3 mb-4">
                                I'm a Front-end Developer with 1 year experience
                            </h3>
                            <p className="mb-6">
                                I am a responsible and goal-oriented person with
                                a quick learning ability. I was involved in a
                                non- commercial project that has given me an
                                understanding of Scrum methodology. Working in a
                                well-organized team I have learned to be a good
                                team player.
                            </p>
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div>
                                    <div className="text-[40px] font-tertiary text-gradient">
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={1}
                                                duration={3}
                                            />
                                        ) : null}
                                    </div>

                                    <div className="font-primary text-sm tracking-[2px]">
                                        Year of
                                        <br />
                                        Experience
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[40px] font-tertiary text-gradient">
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={1}
                                                duration={6}
                                            />
                                        ) : null}
                                    </div>

                                    <div className="font-primary text-sm tracking-[2px]">
                                        Project
                                        <br />
                                        Completed
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-8 items-center">
                                <Link
                                    to="contact"
                                    activeClass="active"
                                    smooth={true}
                                    spy={true}
                                    className="cursor-pointer h-[60px] flex"
                                >
                                    <button className="btn btn-lg">
                                        Contact me
                                    </button>
                                </Link>
                                <a
                                    href={CV_PDF}
                                    rel="noopener noreferrer"
                                    className="text-gradient btn-link"
                                >
                                    My Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

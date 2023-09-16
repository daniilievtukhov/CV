import React from "react";
//images
import Image from "../assets/me.png";
//icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
//animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import CV_PDF from "../assets/CV_Daniil_Yevtukhov.pdf";
const Banner = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
            id="home"
        >
            <div className="container mx-auto">
                {/*text*/}
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                        >
                            DANIIL <span>YEVTUKHOV</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-4">I'm a</span>
                            <TypeAnimation
                                sequence={[
                                    "React developer.",
                                    2000,
                                    "JavaScript developer.",
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Dear Recruiters! Welcome to my Web-CV. Here, you can
                            see all the information about myself. Follow the
                            navigation buttons below or scroll the site to know
                            me better. I'm looking forward to your feedback!
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                        >
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
                        </motion.div>
                        {/*socials*/}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
                        >
                            <a href="https://github.com/daniilievtukhov">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/daniil-yevtukhov-b9811220b/">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/ievtukhovofficial/">
                                <FaInstagram />
                            </a>
                        </motion.div>
                    </div>
                    {/*image*/}
                    <motion.div
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={Image} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

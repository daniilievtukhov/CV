import React from "react";
import { Link } from "react-scroll";
const Header = () => {
    return (
        <div className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/*logo*/}
                    <a href="#">
                        <span
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(92.23deg, #406aff 1.43%, #3bace2 10.63%, #b936ee 100%, #ff56f6 117.04%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Daniil
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            Yevtukhov
                        </span>
                    </a>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer h-[60px] flex"
                    >
                        <button className="btn btn-sm">Work with me</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

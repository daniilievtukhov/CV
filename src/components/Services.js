import React from "react";

const skills = [
    {
        name: "Languages",
        description: " English- B2 , Ukrainian- native, Russian- native",
    },
    {
        name: "Hard skills",
        description:
            " JavaScript, HTML5, Cascading Style Sheets, React.JS, Git, MAMP, Swagger, Photoshop ",
    },
    {
        name: "Soft skills",
        description:
            " Scrum, creativity, ability to work in a team, ability to self-learn ",
    },
];
const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/*text*/}
                    <div className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">What I know.</h2>
                        <h3 className="h3 max-w- [455px] mb-16">
                            I'm a Junior Front-end developer with 1 year of
                            experience.
                        </h3>
                        <button className="btn btn-sm">
                            <a href="https://github.com/ProvedCode/frontend">
                                See my work
                            </a>
                        </button>
                    </div>
                    {/*skills*/}
                    <div className="flex-1">
                        {/*skills list*/}
                        <div>
                            {skills.map((skill, index) => {
                                const { name, description } = skill;
                                return (
                                    <div key={index}>
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                                {name}
                                            </h4>
                                            <p className="font-secondary leading-tight">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

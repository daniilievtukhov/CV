import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
const Contact = () => {
    const form = useRef();
    const [emailValid, setEmailValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(form.current.user_email.value)) {
            setEmailValid(false);
            return;
        }

        emailjs
            .sendForm(
                "service_z84vkm6",
                "template_d9wm309",
                form.current,
                "OC9jJBqFmPtkXB7QB"
            )
            .then(
                () => {
                    form.current.reset();
                    setEmailValid(true);
                    setIsModalOpen(true);
                },
                (error) => {
                    console.log(error.text);
                    setEmailValid(false);
                }
            );
    };

    const validateEmail = (email) => {
        // Простая валидация email-адреса с использованием регулярного выражения
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const handleModalClose = () => {
        setIsModalOpen(false); // Закрываем модальное окно
    };
    return (
        <section className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/*text*/}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                            Get in touch
                        </h4>
                        <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                            Let's work
                            <br />
                            together!
                        </h2>
                    </motion.div>
                    {/*form*/}
                    <motion.form
                        ref={form}
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
                        onSubmit={sendEmail}
                    >
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your name"
                            name="user_name"
                        />
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your email"
                            name="user_email"
                            required
                        />
                        <textarea
                            className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                            placeholder="Your message"
                            name="message"
                        ></textarea>
                        {!emailValid ? (
                            <p className="text-red-500">
                                Please enter a valid email address
                            </p>
                        ) : null}
                        <button
                            onClick={handleModalClose}
                            className="btn btn-lg"
                        >
                            Send message
                        </button>
                    </motion.form>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </section>
    );
};
export default Contact;

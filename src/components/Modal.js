import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>{" "}
            {/* Черный фон */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Модальное окно */}
                <div className="bg-black p-8 rounded-lg shadow-lg text-center">
                    <p className="text-xl mb-4  ">
                        The email was successfully sent. Thanks!
                    </p>
                    <button className="btn btn-lg" onClick={onClose}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

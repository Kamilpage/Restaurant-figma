import Modal from "./UI components/Modal.tsx";
import {useState} from "react";

const ZoomImg = ({src, alt, price}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <section>
            <div>
                <img src={src} alt={alt}
                     onClick={openModal}
                />
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div onClick={closeModal} className='zoom-img'>
                <img
                    src={src}
                    alt={alt}
                    onClick={(e)=>e.stopPropagation()}
                />
                    <div className='img-info'>
                    <p>{alt}</p>
                    <p>{price}$</p>
                    </div>
                </div>
                </Modal>
        </section>
    );
};

export default ZoomImg;
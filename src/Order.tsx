import Header from "./UI components/Header.tsx";
import {useState} from "react";
import Modal from "./UI components/Modal.tsx";

const Order = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    return (
        <div className='side-page'>
            <Header/>
            <div className='container'>
                <div className='orderCheck order-component'>
                    <h1>Для заказа наших блюд нужно заполнить несколько полей</h1>
                    <input type="text" placeholder='На чьё имя?'/>
                    <input type="number" placeholder='На сколько персон?'/>
                    <input type="tel" placeholder="Номер телефона"/>
                    <input type="datetime-local"/>
                    <div className='order__action'>
                        <a className='dark-orange-btn btn' onClick={openModal}>Отправить</a>
                        <a className='dark-orange-btn btn' href='/Pages' onClick={closeModal}>Закрыть</a>
                    </div>
                </div>
            </div>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                            <div className='notif-modal container'>
                                <div className='notif'>
                                    <h1>
                                        Ваш Запрос принят
                                    </h1>
                                </div>
                            </div>
                        </Modal>

        </div>
    );
};

export default Order;
import {useState} from "react";
import Modal from "./Modal.tsx";


const MyOrderBtn = ({label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (<div>

        <button className='btn orange-btn' onClick={openModal}>
            {label}
        </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className='orderCheck'>
                <h1>Для заказа наших блюд нужно заполнить несколько полей</h1>
                    <input type="text" placeholder='На чьё имя?'/>
                    <input type="number" placeholder='На сколько персон?'/>
                    <input type="tel" placeholder="Номер телефона"/>
                    <input type="datetime-local"/>
                    <div className='order__action'>

                    <button className='btn dark-orange-btn' onClick={closeModal}>Отправить</button>
                    <button className='dark-orange-btn btn' onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            </Modal>
    </div>
    );
};

export default MyOrderBtn;
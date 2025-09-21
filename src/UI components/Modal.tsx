import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import '../styles/main.css'

const Modal = ({ isOpen, onClose, children }) => {
    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

    // хуки никогда не вызываем условно
    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // нужно stopPropagation, не preventDefault
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
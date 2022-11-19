import closeBtn from "../assets/images/close-btn-icon.svg"

const Modal = ({children, closeModal}) => {    
    return (<div className="modal__overlay" onClick={closeModal}>
        <div className="modal__window" onClick={e => e.stopPropagation()}>
            <button 
                className="modal__btn-close"
                onClick={closeModal}
            ><img src={closeBtn} alt="Кнопка закрытия модального окна" /></button>
            <div className="modal__inner">
                {children}
            </div>
        </div>
    </div>)
}

export default Modal
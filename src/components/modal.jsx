import { useDispatch } from "react-redux"
import { isOpenModal } from "../store/modal/modalSlice"
import closeBtn from "../assets/images/close-btn-icon.svg"

const Modal = ({children}) => {
    const dispatch = useDispatch();
    
    return (<div className="modal__overlay" onClick={() => dispatch(isOpenModal(false))}>
        <div className="modal__window" onClick={e => e.stopPropagation()}>
            <button 
                className="modal__btn-close"
                onClick={() => dispatch(isOpenModal(false))}
            ><img src={closeBtn} alt="Кнопка закрытия модального окна" /></button>
            <div className="modal__inner">
                {children}
            </div>
        </div>
    </div>)
}

export default Modal
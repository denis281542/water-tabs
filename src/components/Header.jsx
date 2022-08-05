import { useDispatch, useSelector } from "react-redux";
import icon from "../assets/images/header-icon.png";
import { Link } from "react-router-dom";
import { scrollToForm } from "../store/anchor/anchorSlice";
import { isOpenModal } from "../store/modal/modalSlice";
import Modal from "./modal";
import Login from "./Login";
import RegistrationFrom from "./RegistrationFrom";

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.name)
    const isOpen = useSelector(state => state.modal.isOpen);
    const login = useSelector(state => state.modal.login);

    const closeModal = () => {
        dispatch(isOpenModal(false))
    }

    return(<header className="header">
        <Link to="/">
            <img 
                className="header__icon"
                src={icon} 
                alt="Логотип сайта по замене счетчиков воды в Верхней Салде"
            />
        </Link>
        
        <div className="header__contacts">
            {isOpen && <Modal children={login ? <Login /> : <RegistrationFrom/>} closeModal={closeModal} />} 
            {user 
                ? <Link 
                    className="header__btn" 
                    to="/account">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/>
                        </svg>
                  </Link>
                : <button 
                    className="header__btn"
                    onClick={() => {
                        dispatch(isOpenModal(true))
                    }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"/>
                        </svg>
                   </button>
            }
            <a 
                className="header__btn" 
                href="tel:+79632726269"
            >Позвонить</a>
            <button 
                className="header__btn"
                onClick={() => dispatch(scrollToForm())}
            >Заказать</button>
        </div>
    </header>)
}

export default Header
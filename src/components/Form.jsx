import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import formImg from '../assets/images/undraw_Receipt_re_fre3.png';
import { isOpenModal } from "../store/modal/modalSlice";
// import Modal from './components/modal';
// import ModalContent from './components/ModalContent';
import { createOrder } from "../store/order/orderSlice";
import { createUser } from "../store/user/userSlice";
import Modal from "./modal";
import ModalContent from "./ModalContent";

const Form = () => {
    const [focusName, setFocusName] = useState(false);
    const [focusPhone, setFocusPhone] = useState(false);
    const [focusDate, setFocusDate] = useState(false);
    const [focusComment, setFocusComment] = useState(false);

    const dispatch = useDispatch()

    const scrollToForm = useSelector(state => state.anchor.clickCounter);
    const isOpen = useSelector(state => state.modal.isOpen);

    const contactForm = useRef(null);

    useEffect(() => {
        if(scrollToForm) {
            contactForm.current.scrollIntoView({behavior: "smooth"})
        }
    }, [scrollToForm] )

    let labelPhone = "label"
    let labelDate = "label"
    let labelComment = "label"

    if(focusPhone) labelPhone += ' label--active'
    if(focusDate) labelDate += ' label--active' 
    if(focusComment) labelComment += ' label--active' 
    
    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorDate, setErrorDate] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true);
    
    const [valueName, setValueName] = useState('');
    const [valuePhone, setValuePhone] = useState('');
    const [valueDate, setValueDate] = useState('');
    const [valueComment, setValueComment] = useState('');

    let labelName = "label", 
        inputClassName, inputClassPhone, inputClassDate, inputClassComment = ""  

    if(focusName) labelName += ' label--active'      
    if(errorName) {
        labelName += ' error' 
        inputClassName += ' error'
    }
    
    if(focusName) labelName += ' label--active'      
    if(errorPhone) {
        labelPhone += ' error' 
        inputClassPhone += ' error'
    }
    
    if(focusDate) {
        labelDate += ' label--active'
        inputClassDate += ' active'
    }    
    if(errorDate) {
        labelDate += ' error' 
        inputClassDate += ' error'
    }

    const resetFormData = () => {
        setValueName('')
        setValuePhone('')
        setValueDate('')
        setValueComment('')

        setFocusName(false)
        setFocusPhone(false)
        setFocusDate(false)
        setFocusComment(false)
    }

    const upperCaseFirst = words =>  words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

    const submit = e => {
        e.preventDefault()

        dispatch(isOpenModal(true))   

        new Promise(resolve => {
            resolve(dispatch(createUser({
                name: valueName,
                phone: valuePhone
            })))
        }).then(response => {
            dispatch(createOrder({
                date: valueDate,
                comment: valueComment,
                user_id: response.payload.id  
            }))
        })

        resetFormData()        
    }

    useEffect(() => {
        if(errorName || errorPhone || errorDate || !focusName || !focusPhone || !focusDate) {
            setDisableBtn(true)
        } else setDisableBtn(false)
    }, [errorName, errorPhone, errorDate, focusName, focusPhone, focusDate]);    

    return(
    <section className="container formSection" ref={contactForm}>
        <h3>Оставить заявку</h3>
        <img 
            className="formSection__img"
            src={formImg} 
            alt='Форма заявки' 
        />
        <form className="form">
            <div>
                <label
                    htmlFor='name'
                    className={labelName}
                >Имя</label>
                <input 
                    className={inputClassName}
                    onFocus={() => {
                        setFocusName(true)
                        setErrorName(false)
                    }}
                    onBlur={() => {
                        if(valueName.length === 0) {
                            setErrorName(true)
                            setFocusName(false)
                        }
                        if(valueName.length !== 0) {
                            setValueName(upperCaseFirst(valueName))
                        }
                    }}
                    type='text'
                    id='name'
                    onChange={e => {
                        setValueName(e.target.value)

                        if(!(/[а-яА-ЯЁё]/i.test(e.target.value))) {
                            setErrorName(true)
                        } else {
                            setErrorName(false)
                        }
                    }}
                    value={valueName}
                />
            </div>

            <div>
                <label
                    htmlFor='phone'
                    className={labelPhone} 
                >Телефон для связи</label>
                <input 
                    className={inputClassPhone}
                    onFocus={() => {
                        setFocusPhone(true)
                        setErrorPhone(false)
                        if(valuePhone.length === 0) {
                            setValuePhone(8 )
                        }
                    }}
                    onBlur={(e) => {
                        if(valuePhone.length === 0) {
                            setErrorPhone(true)
                            setFocusPhone(false)
                        }
                        e.target.value.length !== 11 ? setErrorPhone(true) : setErrorPhone(false)
                    }}
                    type='number'
                    id='phone'
                    name='phone'
                    onChange={e => {
                        setValuePhone(e.target.value)
                        e.target.value.length > 11 ? setErrorPhone(true) : setErrorPhone(false)
                    }}
                    value={valuePhone}
                />
            </div>

            <div>
                <label
                    htmlFor='date'
                    className={labelDate} 
                >Выбрать дату</label>
                <input 
                    className={inputClassDate}
                    onFocus={() => {
                        setFocusDate(true)
                        setErrorDate(false)
                    }}
                    onBlur={() => {
                        if(valueDate.length === 0) {
                            setErrorDate(true)
                            setFocusDate(false)
                        }
                    }}
                    type='date'
                    id='date'
                    name='date'
                    onChange={e => setValueDate(e.target.value)}
                    value={valueDate}
                />
            </div>

            <div>
                <label
                    htmlFor='comment'
                    className={labelComment} 
                >Комментарий</label>
                <input 
                    className={inputClassComment}
                    onFocus={() => setFocusComment(true)}
                    onBlur={() => valueComment.length === 0 ? setFocusComment(false) : null}
                    type='comment'
                    id='comment'
                    name='comment'                    
                    onChange={e => setValueComment(e.target.value)}
                    value={valueComment}
                />
            </div>

            <button 
                disabled={disableBtn}
                className="form__btn"
                onClick={submit}
            >Оставить заявку</button>
        </form>

        <div>
            <p className="form__select-text">или</p>
            <a href="tel:+79632726269" className="form__btn">Позвонить</a>
        </div>

        {isOpen 
            ? <Modal
                // children={<ModalContent />}
            /> 
            : null
        }
    </section>)
}

export default Form

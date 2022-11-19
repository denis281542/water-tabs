import { useSelector } from "react-redux"

const ModalContent = () => {
    const user = useSelector(state => state.user.name)
    const visitDate = useSelector(state => state.order.date)
    const userPhone = useSelector(state => state.user.phone)

    const convertDateToLocal = (date) => {
        return new Date(date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'})
    }

    return(<>
        <h2 className="modal__title">{user}, спасибо за заказ.</h2>
        <h3 className="modal__subtitle">Детали заказа</h3>
        <p className="modal__description">
            Дата визита: {convertDateToLocal(visitDate)}<br/>
            Контактный телефон: {userPhone}<br/>
        </p>
        <span>В блажайшее время с Вами свяжутся для подтвеждения информации</span>
    </>)
}

export default ModalContent
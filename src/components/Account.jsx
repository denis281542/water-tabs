import { useSelector } from "react-redux"

const Account = () => {
    const name = useSelector(state => state.user.name);
    const phone = useSelector(state => state.user.phone);
    const order = useSelector(state => state.order.date);

    const convertDateToLocal = (date) => {
        return new Date(date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'})
    }

    return(<div>
        <div>Имя: {name}</div>
        <div>Телефон: {phone}</div>
        <div>Дата заказа: {convertDateToLocal(order)}</div>
    </div>)
}

export default Account
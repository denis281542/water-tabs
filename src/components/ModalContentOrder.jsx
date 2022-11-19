import Button from './Button';
import Input from './Input'

const ModalContentOrder = ({price}) => {
    return(<>
        <h2 className="modal__title">Создать заказ</h2>

        <div className="modal__fields">
            <Input 
                label="Имя"
            />
            <Input 
                label="Телефон"
            />
        </div>
        
        <p className="modal__price">Цена: {price} рублей</p>
        <Button
            text="Заказать"
            className="order"
        />
    </>)
}

export default ModalContentOrder;

//Сделать модальное окно на заказ 500/900 в фигме
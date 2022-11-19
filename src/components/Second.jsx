import { useState } from 'react';
import imgSecondFrisrt from '../assets/images/second-img-1.webp'
import imgSecondSecond from '../assets/images/second-img-2.webp'
import Button from './Button';
import Modal from './modal';
import ModalContentOrder from './ModalContentOrder';

const Second = () => {
    const imgDescription = "Пример работы по земене счетка, город Верхняя Салда";
    const container = "container";
    const secondTitleLast = "Услуга по замене двух счетчиков";
    const secondTitleFirst = "Услуга по замене одного счетчика";
    const priceOne = 500;
    const priceTwo = 900;
    const [isOpen, setOpen] = useState(false)
    const [price, setPrice] = useState(null)
    
    const openModal = (price) => {
        setOpen(true);
        setPrice(price);
        console.log(price);
    } 

    return(<section className={"second " + container}>
        {isOpen && <Modal>
                <ModalContentOrder 
                    price={price}
                />
            </Modal>}                

        <article>
            <img src={imgSecondSecond} alt={imgDescription} />
            <div>
                <h2>{secondTitleFirst}</h2>
                <p>Стоимость: {priceOne} рублей</p>
            </div>
            <Button 
                text="Заказать"
                className="order"
                onClick={() => openModal(priceOne)}
            />
        </article>

        <article>
            <img src={imgSecondFrisrt} alt={imgDescription} />
            <div>
                <h2>{secondTitleLast}</h2>
                <p>Стоимость: {priceTwo} рублей</p>
            </div>
            <Button 
                text="Заказать"
                className="order"
                onClick={() => openModal(priceTwo)}
            />
        </article>

    </section>)
}

export default Second
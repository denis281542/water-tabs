import imgSecondFrisrt from '../assets/images/second-img-1.webp'
import imgSecondSecond from '../assets/images/second-img-2.webp'

const Second = () => {
    const imgDescription = "Пример работы по земене счетка, город Верхняя Салда"
    const container = "container"
    const secondTitleFirst = "Заголовок 1"
    const secondTitleLast = "Заголовок 2"
    const secondDescription = "Пример выполненой работы выполненой работы выполненой работы выполненой работы"

    return(<section className={"second " + container}>
        <article>
            <img src={imgSecondSecond} alt={imgDescription} />
            <h2>{secondTitleLast}</h2>
            <p>{secondDescription}</p>
        </article>

        <article>
            <img src={imgSecondFrisrt} alt={imgDescription} />
            <h2>{secondTitleFirst}</h2>
            <p>{secondDescription}</p>
        </article>

    </section>)
}

export default Second
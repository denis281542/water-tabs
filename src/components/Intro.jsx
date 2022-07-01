const Intro = () => {
    const city = 'Верхней Салде'
    const introDescription = 'Быстрая и качественная замена счетчиков горячей и холодной воды'

    return(
    <section className="intro">
        <article className="intro__inner">
            <h1 className="intro__title">Замена счетчиков воды в {city}</h1>
            <p>{introDescription}</p>
        </article>
    </section>)
}

export default Intro
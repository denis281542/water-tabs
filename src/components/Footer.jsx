const Footer = () => {
    const footerTitle = "Замена счетчиков горячей и холодной воды в Верхней Салде"
    const author = "Создание сайта DK"
    const date = (new Date()).getFullYear()
    
    return(<footer className="footer">
        <h2 className="footer__title">{footerTitle}</h2>
        <p>{author}</p>
        <p>{date}</p>
    </footer>)
}

export default Footer
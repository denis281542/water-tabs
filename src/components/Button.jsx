const Button = ({text, className, onClick}) => {
    return(
        <button 
            className={"button__" + className}
            onClick={onClick}
        >
            {text}
        </button>)
}

export default Button
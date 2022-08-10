import { useState } from "react";

const Input = ({htmlFor, label, type, id, name, errorMessage, validateInput}) => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const onBlur = () => {
        validateInput(value)
        !!errorMessage ? setError(true) : setError(false)
        // if(!value.length) {
        //     setError(true)
        //     setErrorMessage(`Заполните ${label.toLowerCase()}`)
        // } else {
        //     console.log(validateInput(value));
        //     if(!validateInput(value)) {
        //         setError(true) 
        //         setErrorMessage(`Поле ${label.toLowerCase()} указано неверно`)
        //     } else {
        //         setError(false) 
        //         setErrorMessage(``)
        //     }
        // }
    }

    // console.log(!!errorMessage);
    
    return(
    <div className="login__field">
        <label
            htmlFor={htmlFor}
            className="login__label"
        >{label}</label>
        <input 
            className={!error ? "login__input" : "login__input login__input--error"}
            type={type}
            id={id}
            name={name}
            onChange={e => setValue(e.target.value)}           
            value={value}
            onFocus={() => setError(false)}
            onBlur={onBlur}
        />
        {error && <small className="error">{errorMessage}</small>}
    </div>)
}

export default Input
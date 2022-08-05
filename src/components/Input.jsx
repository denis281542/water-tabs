import { useState } from "react";

const Input = ({htmlFor, label, type, id, name, validateInput}) => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onBlur = () => {
        if(!value.length) {
            setError(true)
            setErrorMessage(`Заполните ${label.toLowerCase()}`)
        } else {
            if(validateInput(value)) {
                setError(true) 
                setErrorMessage(`Поле ${label.toLowerCase()} указано неверно`)
            } else {
                setError(false) 
                setErrorMessage(``)
            }
        }
    }
    
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
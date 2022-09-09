import { useState } from "react";

const Input = ({htmlFor, label, type, id, name, isValid, errorMsg, onChange, value, comparePasswords}) => {
    const [error, setError] = useState(false);
    const [errorsPassword, setErrorsPassword] = useState([]);
    const [errorMessage, setErrorMessage] = useState(errorMsg);

    const checkInput = (validation, value, errorMsg) => {
        new Promise((resolve) => {
            if(!validation(value)) {
                if(value.length === 0) { 
                   setErrorMessage('Заполните поле');
                   setError(true);
                } else {
                    setErrorMessage('');
                    resolve(setError(false))                 
                } 
           }
        }).then(() => {
            setError(true);
            setErrorMessage(errorMsg);
        }).then(() => {
            if(name === 'passwordConfirm') {
                if(comparePasswords()) {
                    setErrorMessage('');
                    setError(false)
                } else {
                    setErrorMessage(errorMsg);
                    setError(true);
                }
            }
        })        
    }

    const checkPassword = (value) => {      
        if(/[a-zA-Z]/gm.test(value)) {
            new Promise((resolve) => {
                    if(value.length < 8) {
                        setErrorMessage('Пароль должен быть не короче 8 символов');
                        setError(true);
                    } else if(value.length >= 8 && value.length <= 14) {
                        setErrorMessage('');
                        resolve(setError(false));
                    } else {
                        setErrorMessage('Пароль должен быть не длинее 14 символов');
                        setError(true);
                    }
            }).then(() => {
                !/\d/.test(value) && setErrorsPassword(errorsPassword.push('цифры'))
                !/[A-Z]/.test(value) && setErrorsPassword(errorsPassword.push('заглавные буквы'))
                !/[a-z]/.test(value) && setErrorsPassword(errorsPassword.push('строчные буквы'))
                
                if(errorsPassword.length > 1) {
                    setErrorMessage(`Пароль должен содержать ${errorsPassword.splice(',').join(' и ')}`)
                    setError(true)
                } else if(errorsPassword.length === 1)  {
                    setErrorMessage(`Пароль должен содержать ${errorsPassword}`)
                    setError(true)
                } else {
                    setErrorMessage(``)
                    setError(false)
                }
            }) 
        } else if(value.length === 0) {
            setError(true);
            setErrorMessage('Заполните пароль');
        } else {
            setError(true);
            setErrorMessage('Пароль должен быть на английском');
        }
    }

    const onFocus = () => {
        setError(false)
        setErrorsPassword([])
    }

    const onBlur = () =>  
        name === 'password' 
            ? checkPassword(value) 
            : checkInput(isValid, value, errorMsg)
    
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
            onChange={onChange}           
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        {error && <small className="error">{errorMessage}</small>}
    </div>)
}

export default Input
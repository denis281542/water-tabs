import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLogin } from "../store/modal/modalSlice";
import { registration } from "../store/user/userSlice";
import Button from "./Button";
import Input from "./Input";

const RegistrationFrom = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [nameError, setNameError] = useState(() => {
        return {error: false, message: null}
    });
    const [loginError, setLoginError] = useState(() => {
        return {error: false, message: null}
    });
    const [emailError, setEmailError] = useState(() => {
        return {error: false, message: null}
    });
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);

    const [isDirty, setDirty] = useState(false);


    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const isLoginExist = useSelector(state => state.user.isLoginExist);

    const openLoginModal = () => {
        dispatch(switchLogin(true))
    }

    const isInputEmpty = (value, setValue) => {
        !value.length ? setValue({error: true, message: "Поле не должно быть пустым"}) : setValue({error: false})
    }

    const checkInputs = () => {
        isInputEmpty(name, setNameError)
        isInputEmpty(login, setLoginError)
        isInputEmpty(email, setEmailError)
        isInputEmpty(password, setPasswordError)
    }

    const comparePasswords = () => {
        if(password !== passwordConfirm) {
            setPasswordConfirmError(true)
            return false
        } else return true
    }

    const isEmail = (email) => {
        const isEmail =  String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return isEmail && true
    }; 
    
    const isCyrillic = word => {
        const isValid = /[а-яА-ЯЁё]/.test(word)
        return isValid && true
    }

    const isLogin = login => {
        const isValid = /[a-zA-Z]/gm.test(login)
        return isValid && true
    } 

    const isPassword = password => {
        const isValid = /[a-zA-Z]/gm.test(password)

        if(password.length === 0) {
            setErrorMessage('Заполните пароль')
            return 
        }

        if(!isValid) {
            setErrorMessage('Пароль должен быть на английском')
            return 
        }
        
        password.length < 6 || password.length > 14 
            ? setErrorMessage('Пароль должен быть от 6 до 14 символов') 
            : setErrorMessage('')
    }

    //исправить ошибку валидации пароля при первой ошибке
    
    useEffect(() => {
        isLoginExist ? setLoginError(true) : setLoginError(false);
    }, [isLoginExist])

    const submit = () => {
        checkInputs();
        comparePasswords(); 
        isLogin(login) 
        isEmail(email) 

        // if(!nameError.error && !loginError.error && !emailError.error && !passwordError.error && comparePasswords()) {
        if(isDirty) {
            dispatch(registration({ name, login, email, password }))
        } // установить isDirty для каждого поля, а не только name
    }
    
  return (<>
    <div className="login__fields">
        <Input
            htmlFor="name"
            label="Имя"
            type="text"
            id="name"
            name="name"
            validateInput={name => isCyrillic(name)}
        />
        <Input
            htmlFor="login"
            label="Логин"
            type="text"
            id="login"
            name="login"
            validateInput={login => isLogin(login)}            
            // onChange={e => setLogin(e.target.value)}
            // value={login}
            // error={loginError.error}                
            // onFocus={() => setLoginError({error: false})}
            // onBlur={() => {
            //     !login.length 
            //         ? setLoginError({error: true, message: "Заполните логин"}) 
            //         : isLogin(login)
            // }}
            errorMessage={isLoginExist ? 'Пользователь с таким логином уже существует' : loginError.message}
        />
        <Input
            htmlFor="email"
            label="Email"
            type="email"
            id="email"
            name="email"
            validateInput={email => isEmail(email)}            
            // onChange={e => setEmail(e.target.value)}
            // value={email}
            // error={emailError.error}                
            // onFocus={() => setEmailError({error: false})}
            // onBlur={() => {
            //     !email.length 
            //         ? setEmailError({error: true, message: "Заполните email"}) 
            //         : isEmail(email)
            // }}
            errorMessage={emailError.message} 
        />
        <Input
            htmlFor="password"
            label="Пароль"
            type="text"
            id="password"
            name="password"
            validateInput={password => isPassword(password)} 
            errorMessage={errorMessage}          
            // onChange={e => setPassword(e.target.value)}
            // value={password}
            // error={passwordError.error}                
            // onFocus={() => setPasswordError({error: false})}
            // onBlur={() => !password.length && setPasswordError({error: true, message: "Заполните пароль"})}
        />
        <Input
            htmlFor="passwordConfirm"
            label="Повторный пароль"
            type="text"
            id="passwordConfirm"
            name="passwordConfirm"
            // onChange={e => setPasswordConfirm(e.target.value)}
            // value={passwordConfirm}
            // error={passwordConfirmError}                
            // onFocus={() => setPasswordConfirmError(false)}
            // errorMessage="Пароли не совпадают"
        />
    </div>
    
    <button 
        className="button-as-link"
        onClick={openLoginModal}
    >Войти</button>
    
    <Button
        text="Регситрация"
        className="login__btn"
        onClick={submit}
    />
</>)
}

export default RegistrationFrom;

import Input from "./Input"
import Button from "./Button"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { findUserByLoginOrPhone } from "../store/user/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [login, setLoginValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const checkInputs = () => {
        if(login.length === 0) {
            setErrorLogin(true)
        }
        if(password.length === 0) {
            setErrorPassword(true)
        }
    }

    const submitLogin = () => {
        checkInputs()

        dispatch(findUserByLoginOrPhone(login))
        console.log(login);

    }

    return(<>
        <div className="login__fields">
            <Input
                htmlFor="login"
                label="Логин или номер телефона"
                type="text"
                id="login"
                name="login"
                onChange={e => setLoginValue(e.target.value)}
                value={login}
                error={errorLogin}
                onFocus={() => setErrorLogin(false)}
                errorMessage="Введите логин или номер телефона"
            />
            <Input
                htmlFor="password"
                label="Пароль"
                type="text"
                id="password"
                name="password"
                onChange={e => setPasswordValue(e.target.value)}
                value={password}
                error={errorPassword}                
                onFocus={() => setErrorPassword(false)}
                errorMessage="Заполните пароль"
            />
        </div>
        
        <Button 
            text="Войти"
            className="login__btn"
            onClick={submitLogin}
        />
    </>)
}

export default Login
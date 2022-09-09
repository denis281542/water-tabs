import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLogin } from "../store/modal/modalSlice";
import { registration } from "../store/user/userSlice";
import Button from "./Button";
import Input from "./Input";

const initialValues = {
    name: "",
    login: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

const RegistrationFrom = () => {
    const dispatch = useDispatch();



    const openLoginModal = () => {
        dispatch(switchLogin(true))
    }    

    const validationName = value => /[а-яА-ЯЁё]/.test(value);
    const validationLogin = login => /[a-zA-Z]/gm.test(login);
    const validationEmail = email => String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    
        

    const submit = () => {

    }


    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const comparePasswords = () => values.password === values.passwordConfirm ? true : false;
    
  return (<>
    <div className="login__fields">
        <Input
            htmlFor="name"
            label="Имя"
            type="text"
            id="name"
            name="name"
            isValid={validationName}
            errorMsg='Имя должно быть на русском'            
            value={values.name}
            onChange={handleInputChange}
        />
        <Input
            htmlFor="login"
            label="Логин"
            type="text"
            id="login"
            name="login"
            isValid={validationLogin}
            errorMsg='Логин должен быть на английском'            
            value={values.login}
            onChange={handleInputChange}
        />
        <Input
            htmlFor="email"
            label="Email"
            type="email"
            id="email"
            name="email"            
            isValid={validationEmail}
            errorMsg='Email введен неверно'            
            value={values.email}
            onChange={handleInputChange}
        />
        <Input
            htmlFor="password"
            label="Пароль"
            type="text"
            id="password"
            name="password" 
            isValid={() => ''}          
            value={values.password}
            onChange={handleInputChange}
        />
        <Input
            htmlFor="passwordConfirm"
            label="Повторный пароль"
            type="text"
            id="passwordConfirm"
            name="passwordConfirm"
            isValid={() => false}
            value={values.passwordConfirm}
            onChange={handleInputChange}
            comparePasswords={comparePasswords}
            errorMsg='Пароли не совпадают'            
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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLogin } from "../store/modal/modalSlice";
import { registration } from "../store/user/userSlice";
import Button from "./Button";
import Input from "./Input";
import useInput from "../hooks/useInput";

const RegistrationFrom = () => {
    const dispatch = useDispatch();



    const openLoginModal = () => {
        dispatch(switchLogin(true))
    }    

    const validationName = name => /[а-яА-ЯЁё]/.test(name);
    const validationLogin = login => /[a-zA-Z]/gm.test(login);
    const validationEmail = email => String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    
        

  


    const [errors, setErrors] = useState({
        name: false,
        login: false,
        email: false,
        password: false,
        passwordConfirm: false,
    });

    

    

    

    











    // const {value, onChange, onBlur, onFocus, error} = useInput('');

    const checkErrors = () => {
        let check
        Object.values(errors).map(error => (
            error === true ? check = false : check = true
        ))
        return check
    }

    // const comparePasswords = () => 
    //     values.password === values.passwordConfirm 
    //         ? true 
    //         : false;

    const submit = (e) => {
        e.preventDefault();
        checkErrors() ? console.log('submit') : console.log('no submit')       
    }




    const name = useInput('', [
        {isEmpty: true, errorMsg: 'Заполните имя'}, 
        {isCyrillic: false, errorMsg: 'Имя должно на русском'},
        {minLength: 3, errorMsg: 'Имя должно быть не короче 3 букв'},
        {maxLength: 15, errorMsg: 'Имя не должно быть длинее 15 символов'},
    ]) 
    
  return (<>
    <div className="login__fields">
        <Input
            htmlFor="name"
            label="Имя"
            type="text"
            id="name"
            name="name"        
            value={name.value}
            errorMsg={name.errorMsg}
            onChange={name.onChange}
            onBlur={name.onBlur}
            isEmpty={name.isEmpty}
            isDirty={name.isDirty}
            // onBlur={() =>{
            //     onBlur(validationName, values.name, 'Заполните имя', 'Имя должно быть на русском')
            // }}
        />
        {/* <Input
            htmlFor="login"
            label="Логин"
            type="text"
            id="login"
            name="login"
            errorMsg='Логин должен быть на английском'    
            // error={error.login}        
            // value={values.login}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={() => onBlur(validationLogin, values.login, 'Заполните логин', 'Логин должен быть на английском')}
        />
        <Input
            htmlFor="email"
            label="Email"
            type="email"
            id="email"
            name="email"            
            isValid={validationEmail}
            errorMsg='Email введен неверно'            
            // value={values.email}
            onFocus={onFocus}
            // error={error.email}  
            onChange={onChange}
            onBlur={() => onBlur(validationEmail, values.email, 'Заполните email', 'Email введен неверно')}
        />
        <Input
            htmlFor="password"
            label="Пароль"
            type="text"
            id="password"
            name="password" 
            isValid={() => ''}          
            // value={values.password}
            // error={error.password} 
            onFocus={onFocus}
            onChange={onChange}
            onBlur={() => onBlur(validationName, values.password, 'Заполните password', 'Email введен неверно')}
        />
        <Input
            htmlFor="passwordConfirm"
            label="Повторный пароль"
            type="text"
            id="passwordConfirm"
            name="passwordConfirm"
            isValid={() => false}
            // value={values.passwordConfirm}
            // error={error.passwordConfirm} 
            onFocus={onFocus}
            onChange={onChange}
            comparePasswords={comparePasswords}
            errorMsg='Пароли не совпадают'            
        /> */}
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

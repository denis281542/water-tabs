const Input = ({htmlFor, label, type, id, name, onChange, value, error, onFocus, errorMessage}) => {
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
        />
        {error && <small className="error">{errorMessage}</small>}
    </div>)
}

export default Input
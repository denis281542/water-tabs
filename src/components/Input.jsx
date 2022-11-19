const Input = ({htmlFor, label, type, id, name, error, errorMsg, onChange, value, onBlur, onFocus, isDirty, minLengthError}) => {    
    return(
        <div className="modal__field">
            <label
                htmlFor={htmlFor}
                className="modal__label"
            >{label}</label>
            <input 
                className={!error ? "modal__input" : "modal__input modal__input--error"}
                type={type}
                id={id}
                name={name}          
                onChange={onChange}           
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {((error || minLengthError) && isDirty) && <small className="error">{errorMsg}</small>}
        </div>
    )
}

export default Input;
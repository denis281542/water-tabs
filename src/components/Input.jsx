const Input = () => {
    return(<>
    <div>
        <label
            htmlFor='comment'
            className="login__label"
        >Комментарий</label>
        <input 
            className="login__input"
            // onFocus={() => setFocusComment(true)}
            // onBlur={() => valueComment.length === 0 ? setFocusComment(false) : null}
            type='comment'
            id='comment'
            name='comment'                    
            // onChange={e => setValueComment(e.target.value)}
            // value={valueComment}
        />
    </div>
    <div>
        <label
            htmlFor='comment'
            className="login__label"
        >Комментарий</label>
        <input 
            className="login__input"
            // onFocus={() => setFocusComment(true)}
            // onBlur={() => valueComment.length === 0 ? setFocusComment(false) : null}
            type='comment'
            id='comment'
            name='comment'                    
            // onChange={e => setValueComment(e.target.value)}
            // value={valueComment}
        />
    </div>
    </>)
}

export default Input
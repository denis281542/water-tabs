const Input = () => {
    return(
    <div>
        <label
            htmlFor='comment'
            // className={labelComment} 
        >Комментарий</label>
        <input 
            // className={inputClassComment}
            // onFocus={() => setFocusComment(true)}
            // onBlur={() => valueComment.length === 0 ? setFocusComment(false) : null}
            type='comment'
            id='comment'
            name='comment'                    
            // onChange={e => setValueComment(e.target.value)}
            // value={valueComment}
        />
    </div>)
}

export default Input
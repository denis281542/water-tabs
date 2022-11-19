import { useState } from 'react'
import useValidation from './useValidation';

const useInput = (initValue, validations) => {
    const [value, setValue] = useState(initValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value, 
        onChange, 
        onBlur, 
        ...valid, 
        isDirty
    }
}

export default useInput;

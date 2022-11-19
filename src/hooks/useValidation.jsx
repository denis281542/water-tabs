import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [error, setError] = useState(false);
    const [errArrMsg, setErrArrMsg] = useState([]);

    useEffect(() => {
        let emptyError, minLengthError, cyrillicError, maxLengthError;

        validations.forEach(validation => {
            if((Object.keys(validation)[0]) === 'isEmpty') {
                emptyError = validation;
            }
            if((Object.keys(validation)[0]) === 'minLength') {
                minLengthError = validation;
            }
            if((Object.keys(validation)[0]) === 'isCyrillic') {
                cyrillicError = validation;
            }
            if((Object.keys(validation)[0]) === 'maxLength') {
                maxLengthError = validation;
            }
        }); // можно вынести в отдельный эффект по onFocus, при фокусировке на этом input такие validation и установить их через set

        if(value.length === 0) {
            setErrArrMsg(() => [emptyError.errorMsg]);
            setError(true)
        } else {
            setErrArrMsg(errArrMsg.filter(errors => errors !== emptyError.errorMsg));
            setError(false)

            if(!/[а-яА-ЯЁё]/.test(value)) {
                setErrArrMsg(() => [cyrillicError.errorMsg])
                setError(true)
            } else {
                setErrArrMsg(errArrMsg.filter(errors => errors !== cyrillicError.errorMsg));
                setError(false)

                if(value.length < minLengthError.minLength) {
                    setErrArrMsg(() => [minLengthError.errorMsg]);
                    setError(true)
                } else {
                    setErrArrMsg(errArrMsg.filter(errors => errors !== minLengthError.errorMsg));
                    setError(false)
                }

                if(value.length > maxLengthError.maxLength && !errArrMsg.includes(maxLengthError.errorMsg)) {
                    setErrArrMsg(errArrMsg => [...errArrMsg, maxLengthError.errorMsg]);
                    setError(true)
                } 
                if(value.length <= maxLengthError.maxLength && !errArrMsg.includes(maxLengthError.errorMsg)){
                    setErrArrMsg(errArrMsg.filter(errors => errors !== maxLengthError.errorMsg)); 
                    setError(false) // больше 15 error false, а должен быть true 
                }
            }
        }
        
        console.log(error);
    }, [value])

    // useEffect(() => {
    //        validations.forEach(validation => {
            
    //         const currentErrorMsg = Object.values(validation)[1];

    //         switch (Object.keys(validation)[0]) {
    //             case 'isEmpty':
    //                 if(value.length === 0) {
    //                     if(!errArrMsg.includes(validation.errorMsg)) {
    //                         setError(true)
    //                         setErrArrMsg(errArrMsg => [...errArrMsg, Object.values(validation)[1]])
    //                     }       
    //                 } else {
    //                     setError(false)
    //                     setErrArrMsg(errArrMsg.filter(errors => errors !== Object.values(validation)[1]));
    //                 }
    //             break;

    //             case 'minLength':
    //                 if(value.length < validation.minLength) {
    //                     if(!errArrMsg.includes(validation.errorMsg)) {
    //                         setError(true)
    //                         setErrArrMsg(errArrMsg => [...errArrMsg, currentErrorMsg])
    //                     }
    //                 } else {
    //                     setError(false)
    //                     setErrArrMsg(errArrMsg.filter(errors => errors !== currentErrorMsg));
    //                 }
    
    //                 if(value.length === 0) {
    //                     setErrArrMsg(errArrMsg.filter(errors => errors !== currentErrorMsg));
    //                 }
    //             break;
                
    //             case 'isCyrillic':
    //                 if(!/[а-яА-ЯЁё]/.test(value)) {
    //                     if(!errArrMsg.includes(validation.errorMsg)) {
    //                         setError(true)
    //                         setErrArrMsg(errArrMsg => [...errArrMsg, currentErrorMsg])
    //                     }
    //                 } else {
    //                     setError(false)
    //                     setErrArrMsg(errArrMsg.filter(errors => errors !== currentErrorMsg));
    //                 }
    
    //                 if(value.length === 0) {
    //                     setErrArrMsg(errArrMsg.filter(errors => errors !== currentErrorMsg));
    //                 }
    //             break;
                
    //             default:
    //               break;
    //           }

    //     });
    // }, [value])
    
    return {
        error,
        errArrMsg
    }
}

export default useValidation;

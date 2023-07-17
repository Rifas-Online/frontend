import React from 'react';
import FormFields from '../FormFields/FormFields';
import FormHeader from '../FormHeader/FormHeader';

type Props = {
    text: string
    textRedirect: string
    target: string
    forgotPassword?: boolean
    btnText: string
    url: string
    ShowpasswordInput?: boolean
};


function Form({ target, text, textRedirect, forgotPassword = false, btnText, url, ShowpasswordInput = true }: Props) {

    return (
        <div className={`flex flex-col gap-5 w-[600px] max-w-[90%]  h-max p-5 border`}>
            <FormHeader text={text} textRedirect={textRedirect} target={target}/>
            <FormFields url={url} btnText={btnText} forgotPassword={forgotPassword} ShowpasswordInput={ShowpasswordInput} />
        </div>
    );
}

export default Form;

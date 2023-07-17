import React from 'react'
import Form from '../Form/Form'
import useMessage from '../message/hook/UseMessage'
import Message from '../message/Message'
import { RiKey2Line } from "react-icons/ri"


const ForgotPassword = () => {

    const {showMessage} = useMessage()

    return (
        <main className="bg-slate-200 flex items-center justify-center h-screen w-screen">
            {showMessage && <Message error text="Email Não Esta Cadastrado!" />}
            <div className="w-screen flex-col flex-1 items-center justify-center relative p-2">
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='bg-green-900 p-4 rounded-full'>
                        <RiKey2Line className='text-3xl text-green-400'/>
                    </span>
                    <h1 className='text-[25px] font-semibold'>Esqueceu Sua senha?</h1>
                    <p>Não se preocupe, vamos te orientar!</p>
                <Form url={""} btnText="Redefinir" text="email" target="login" textRedirect="voltar" ShowpasswordInput={false} />
                </div>
            </div>
        </main>
    )
}

export default ForgotPassword
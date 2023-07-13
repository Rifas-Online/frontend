import React from 'react'
import useMessage from "@/components/message/hook/UseMessage";
import Message from "@/components/message/Message";
import Form from '../Form/Form';


const Register = () => {

    const { showMessage } = useMessage()
    console.log(showMessage)

    return (
        <main className="bg-slate-200">
            {showMessage && <Message error text="Esse email já esta em uso!" />}
            <div className="w-screen h-screen flex flex-1 items-center justify-center">
                <Form url='register' btnText='criar Conta' text='Crie Sua Conta' target='/login' textRedirect='Já Tenho Conta' />
            </div>
        </main>
    )
}

export default Register
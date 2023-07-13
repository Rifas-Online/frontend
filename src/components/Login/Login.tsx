import React from 'react'
import Form from '../Form/Form'
import useMessage from '../message/hook/UseMessage'
import Message from '../message/Message'


const Login = () => {

    const {showMessage} = useMessage()

    return (
        <main className="bg-slate-200">
            {showMessage && <Message error text="Email Ou Senha Invalido!" />}
            <div className="w-screen h-screen flex flex-1 items-center justify-center">
                <Form url={"login"} btnText="Entrar" text="Entrar" target="register" textRedirect="Criar Conta" forgotPassword />
            </div>
        </main>
    )
}

export default Login
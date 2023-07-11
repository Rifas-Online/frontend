'use client'

import Form from "@/components/Form/Form";
import { MessageProvider } from "../../context/message";


export default function Home() {


    return (
        <MessageProvider>
            <main className="bg-slate-200">
                <div className="w-screen h-screen flex flex-1 items-center justify-center">
                    <Form url={"login"} btnText="Entrar" text="Entrar" target="register" textRedirect="Criar Conta" forgotPassword />
                </div>
            </main>
        </MessageProvider>
    )
}

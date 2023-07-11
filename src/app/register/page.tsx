import Form from '@/components/Form/Form'

import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <main className="bg-slate-200">
            <div className="w-screen h-screen flex flex-1 items-center justify-center">
                <Form url='register'  btnText='criar Conta' text='Crie Sua Conta' target='/' textRedirect='Já Tenho Conta'/>
            </div>
        </main>
    )
}

export default page

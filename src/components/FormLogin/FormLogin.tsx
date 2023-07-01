'use client'

import React, { useState } from 'react';
import MyInput from '../MyInput/MyInput';
// import { CgMail } from 'react-icons/cg';
// import { BiLockAlt } from 'react-icons/bi';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineArrowRight } from 'react-icons/ai';

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

type Props = {};


const schema = z.object({
    password: z.string().min(8, "Senha de no minimo 8 caracteres"),
    email: z.string().email("Email inválido"),
})

type FormProps = z.infer<typeof schema>



function FormLogin({ }: Props) {

    const [inputTypeText, setInputTypeText] = useState(false)

    const handleChangeInputType = () => {
        setInputTypeText(!inputTypeText)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    const handleForm = (data: FormProps) => {
        console.log(data)
    }

    return (
        <div className={`
            flex flex-col gap-5
            w-[600px] max-w-[90%]  h-max p-5 border
        `}>
            {/* header */}
            <div className='flex justify-between'>
                <h2 className='text-[30px]'>Sign In</h2>
                <a href='#' className='text-zinc-600 flex items-center gap-2'>
                    <span>Sign Up</span> 
                    <AiOutlineArrowRight/>
                </a>
            </div>

            {/* fields */}
            <form
                className='h-[90%] w-[100%] flex flex-col gap-8'
                onSubmit={handleSubmit(handleForm)}
            >

                <div className='flex flex-col gap-5'>
                    <div>
                        <div className={`flex overflow-hidden items-center border-2 border-zinc-400 rounded-3xl `}>
                            <input
                                {...register("email")}
                                className='w-full outline-none focus:border-green-400 p-3  bg-transparent'
                                type="email" placeholder="Digite Seu Email"
                            />
                        </div>
                        <span className="text-red-500 text-[10px] ml-5">{errors.email?.message}</span>
                    </div>


                    <div>
                        <div  className={`flex flex-col overflow-hidden items-center border-2 rounded-3xl border-zinc-400 relative`}>
                            <input
                                {...register("password")}
                                className='w-full outline-none focus:border-green-400 p-3 bg-transparent'
                                type={`${inputTypeText ? "text": "password"}`}
                                placeholder="Crie uma Senha Forte"
                            />
                            <span 
                                onClick={handleChangeInputType}
                                className='absolute right-[15px] text-[30px] top-2 cursor-pointer'>
                                {inputTypeText?  <AiOutlineEye/>: <AiOutlineEyeInvisible/>}
                            </span>
                        </div>
                    <span className="text-red-500 text-[10px] ml-5">{errors.password?.message}</span>
                    </div>
                </div>


                <div className='text-sm text-zinc-400 '>
                    <a href="">Mudar Senha</a>
                </div>

                <div className='flex justify-center items-center'>
                    <button className='bg-gradient-to-r from-teal-400 to-green-500 py-2 px-16 rounded-3xl text-white shadow-green-800 shadow-md'>
                        Entrar
                    </button>
                </div>

            </form>
        </div>
    );
}

export default FormLogin;

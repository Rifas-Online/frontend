import useLoguin from '@/hooks/useLoguin'
import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

type Props = {

}

function FormLogin({}: Props) {

    const {handleSubmit, handleForm, register, inputTypeText,handleChangeInputType, errors} = useLoguin()

    return (
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
                    <div className={`flex flex-col overflow-hidden items-center border-2 rounded-3xl border-zinc-400 relative`}>
                        <input
                            {...register("password")}
                            className='w-full outline-none focus:border-green-400 p-3 bg-transparent pr-12'
                            type={`${inputTypeText ? "text" : "password"}`}
                            placeholder="Crie uma Senha Forte"
                        />
                        <span
                            onClick={handleChangeInputType}
                            className='absolute right-[15px] text-[30px] top-2 cursor-pointer'>
                            {inputTypeText ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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

    )
}

export default FormLogin
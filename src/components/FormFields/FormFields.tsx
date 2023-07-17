import useLoguin from '../../hooks/form/useForm'
import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import PassWordIstructor from '../PasswordInstructor/PassWordIstructor';

type Props = {
    forgotPassword: boolean
    btnText: string
    url: string
    ShowpasswordInput?: boolean
}

function FormFields({ forgotPassword, btnText, url, ShowpasswordInput = true }: Props) {

    const { handleSubmit,
        handleForm,
        register,
        inputTypeText,
        handleChangeInputType,
        errors,
        handleInputBlur,
        handleInputFocus,
        inputFocus } = useLoguin();

    return (
        <form
            className='h-[90%] w-[100%] flex flex-col gap-8'
            onSubmit={handleSubmit(handleForm)}
        >

            <div className='flex flex-col gap-5'>
                <div>

                    <div className={`
                        flex overflow-hidden items-center border-2 rounded-3xl 
                        ${inputFocus.email ? 'border-green-400 shadow-sm shadow-green-400' : ' border-zinc-400'}
                    `}>
                        <input
                            {...register("email")}
                            className='w-full outline-none focus:border-green-400 p-3  bg-transparent'
                            type="email" placeholder="Digite Seu Email"
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                        />
                    </div>
                    <span className="text-red-500 text-[12px] ml-5">{errors.email?.message}</span>
                </div>


                {ShowpasswordInput && (
                    <div className='relative'>
                        <PassWordIstructor focus={inputFocus.password} />
                        <div className={`
                        flex flex-col overflow-hidden items-center border-2 rounded-3xl  relative 
                        ${inputFocus.password ? 'border-green-400 shadow-sm shadow-green-400' : 'border-zinc-400'}
                    `}>
                            <input
                                {...register("password")}
                                className='w-full outline-none focus:border-green-400 p-3 bg-transparent pr-12'
                                type={`${inputTypeText ? "text" : "password"}`}
                                placeholder="Crie uma Senha Forte"
                                onFocus={() => handleInputFocus('password')}
                                onBlur={() => handleInputBlur('password')}
                            />
                            <span
                                onClick={handleChangeInputType}
                                className='absolute right-[15px] text-[30px] top-2 cursor-pointer'>
                                {inputTypeText ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        <span className="text-red-500 text-[12px] ml-5 flex">{errors.password?.message}</span>
                    </div>)}
            </div>
            <input {...register("hidden")} type="hidden" value={url} />


            {forgotPassword && (
                <div className='text-sm text-zinc-600 '>
                    <a href="forgotpassword" className='underline'>Esqueci Minha Senha</a>
                </div>
            )}

            <div className='flex justify-center items-center'>
                <button className={`
                    bg-gradient-to-r from-teal-400 to-green-500 text-white shadow-green-800
                    shadow-md py-2 px-16 rounded-3xl
                    hover:from-green-500 hover:to-teal-400
                `}>
                    {btnText}
                </button>
            </div>

        </form>

    )
}

export default FormFields
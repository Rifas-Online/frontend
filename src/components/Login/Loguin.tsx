'use client'

import useLoguin from '@/hooks/useLoguin';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FormLogin from '../FormLogin/FormLogin';

type Props = {};


function Login({ }: Props) {

    const {handleChangeInputType, handleForm, handleSubmit, register, inputTypeText, errors} = useLoguin()

    return (
        <div className={`
            flex flex-col gap-5
            w-[600px] max-w-[90%]  h-max p-5 border
        `}>
            {/* header */}
            <div className='flex justify-between'>
                <h2 className='text-[30px]'>Entrar</h2>
                <a href='#' className='text-zinc-600 flex items-center gap-2'>
                    <span>Criar Conta</span> 
                    <AiOutlineArrowRight/>
                </a>
            </div>

            {/* fields */}
            <FormLogin />
        </div>
    );
}

export default Login;

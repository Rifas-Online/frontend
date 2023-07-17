import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
    text: string
    textRedirect: string
    target: string
}

const FormHeader = ({text = "", textRedirect="", target}: Props) => {
    return (
        <div className='flex justify-between gap-4'>
            <h2 className='text-[26px]'>{text}</h2>
            <a href={target} className='text-zinc-600 flex items-center gap-2'>
                <span>{textRedirect}</span>
                <AiOutlineArrowRight />
            </a>
        </div>

    )
}

export default FormHeader
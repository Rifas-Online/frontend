import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
    text: string
    textRedirect: string
    target: string
}

const FormHeader = ({text = "", textRedirect="", target}: Props) => {
    return (
        <div className='flex justify-between'>
            <h2 className='text-[30px]'>{text}</h2>
            <a href={target} className='text-zinc-600 flex items-center gap-2'>
                <span>{textRedirect}</span>
                <AiOutlineArrowRight />
            </a>
        </div>

    )
}

export default FormHeader
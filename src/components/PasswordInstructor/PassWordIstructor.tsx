import React from 'react'

type Props = {
    focus: boolean;
}

const PassWordIstructor = ({focus}: Props) => {
    return (
        <div className={`absolute -top-[90px]  w-full flex justify-center ${focus ? "flex" : "hidden"}`}>
            <span className='bg-white p-3 flex flex-col rounded-md shadow-lg'>
                <span className='text-[12px] font-semibold'>Necessario</span>
                <span className='text-[10px]'>* 1 letra maiuscula</span>
                <span className='text-[10px]'>* 1 caracter especial</span>
                <span className='text-[10px]'>* Minimo de 8 Caracteres</span>
            </span>
        </div>
    )
}

export default PassWordIstructor
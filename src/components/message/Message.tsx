import React from 'react'



type Props = {
    text: string
    error?: boolean
}

const Message = ({text, error}: Props) => {
    return (
        <div className={` 
            flex flex-col justify-center items-center w-[200px] py-3 text-white rounded-lg 
            absolute top-3 -1right-[500px] overflow-hidden show text-[12px]
            ${error ? "bg-red-600": "bg-green-500"} 
        `}>
            <div className='flex flex-col'>
                <p>{text}</p>
            </div>
            <div className='bg-slate-600 h-[5px] w-full absolute bottom-0 left-0 progress'>

            </div>
        </div>
    )
}

export default Message
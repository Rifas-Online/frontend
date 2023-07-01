import React from 'react'

type Props = {
    Icon: React.ElementType
    type: "text" | "password" | "email"
}

function MyInput({ Icon, type }: Props) {
    return (
        <div className={``}>
            <div className='flex overflow-hidden items-center border-2 rounded-3xl px-2'>
                <Icon style={{ marginRight: '8px' }} />
                <input 
                    className='w-full outline-none focus:border-green-400 py-3' 
                    type={type} placeholder="email address"
                    
                />
            </div>
        </div>

    )
}

export default MyInput
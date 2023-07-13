'use client'

import { MessageProvider } from "../../context/message";
import React from 'react'
import Register from '@/components/register/Register';


const page = () => {
    return (
        <MessageProvider>
            <Register/>
        </MessageProvider>
    )
}

export default page

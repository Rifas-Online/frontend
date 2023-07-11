'use client'

import { MessageProvider } from "../../context/message";
import React from 'react'
import Register from '@/components/register/Register';

type Props = {}

const page = (props: Props) => {

    return (
        <MessageProvider>
            <Register/>
        </MessageProvider>
    )
}

export default page

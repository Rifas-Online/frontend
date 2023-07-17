'use client'

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import useMessage from '@/components/message/hook/UseMessage'


export const schema = z.object({
    password: z.string()
        .min(8, "Senha de no minimo 8 caracteres")
        .regex(/[0-9]/, "Senha deve conter pelo menos um número")
        .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um caractere especial")
        .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula'),
    email: z.string().email("Email inválido"),
    hidden: z.string()
})

export type FormProps = z.infer<typeof schema>


const useLoguin = () => {

    const router = useRouter();
    const { handleShowMessage } = useMessage()


    // focus config
    const [inputFocus, setInputFocus] = useState({
        email: false,
        password: false,
    });

    const handleInputFocus = (inputName: string) => {
        setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: true }));
    };

    const handleInputBlur = (inputName: string) => {
        setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: false }));
    };





    //zod validations config and type of input password 
    const [inputTypeText, setInputTypeText] = useState(false)

    const handleChangeInputType = () => {
        setInputTypeText(!inputTypeText)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        mode: "onSubmit",
        resolver: zodResolver(schema)
    })

    const handleForm = async (data: FormProps) => {
        try {
            const response = await axios.post(`http://localhost:3002/auth/${data.hidden}`, data);
            const token = response.data.accessToken;
            console.log(data)
            
            if (token) {
                Cookies.set('token', token);
                router.push('/');
                return;
            }
        } catch (error) {
            const status = error
            if (status !== 0) {
                handleShowMessage()
                return;
            }
        }
    };

    return {
        inputTypeText,
        errors,
        inputFocus,
        setInputFocus,
        handleInputFocus,
        handleInputBlur,
        register,
        handleSubmit,
        handleForm,
        handleChangeInputType,
        setInputTypeText,
    }
}

export default useLoguin
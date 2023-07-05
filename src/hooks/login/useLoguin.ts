'use client'

import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from 'axios'


export const schema = z.object({
    password: z.string()
        .min(8, "Senha de no minimo 8 caracteres")
        .regex(/[0-9]/, "Senha deve conter pelo menos um número")
        .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um caractere especial")
        .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula'),
    email: z.string().email("Email inválido"),
})

type FormProps = z.infer<typeof schema>


const useLoguin = () => {

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
    
    const handleForm = (data: FormProps) => {
        console.log(data)
    }
    
    
    useEffect(() => {
        const SendData = async () => {
            try {
                
            } catch (error) {

            }
        }
    },[handleSubmit])
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
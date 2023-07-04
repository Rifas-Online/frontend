'use client'

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


const schema = z.object({
    password: z.string()
        .min(8, "Senha de no minimo 8 caracteres")
        .regex(/[0-9]/, "Senha deve conter pelo menos um número")
        .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um caractere especial"),
    email: z.string().email("Email inválido"),
})

type FormProps = z.infer<typeof schema>


const useLoguin = () => {

    const [inputTypeText, setInputTypeText] = useState(false)

    const handleChangeInputType = () => {
        setInputTypeText(!inputTypeText)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    const handleForm = (data: FormProps) => {
        console.log(data)
    }


    return {
        inputTypeText, register, handleSubmit, handleForm, handleChangeInputType, setInputTypeText,errors
    }
}

export default useLoguin
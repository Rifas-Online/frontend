'use client'

import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import { MessageProvider } from "../../context/message";

export default function Home() {
    return (
        <MessageProvider>
            <ForgotPassword/>
        </MessageProvider>
    )
}

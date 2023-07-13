'use client'

import { MessageProvider } from "../../context/message";
import Login from "@/components/Login/Login";

export default function Home() {
    return (
        <MessageProvider>
            <Login />
        </MessageProvider>
    )
}

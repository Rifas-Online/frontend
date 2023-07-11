'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type BarContextType = {
    showMessage: boolean;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MessageContext = createContext<BarContextType | undefined>(undefined);

export const MessageProvider = (props: Props) => {
    const { children } = props;

    const [showMessage, setShowMessage] = useState(false);

    return (
        <MessageContext.Provider value={{ setShowMessage, showMessage }}>
            {children}
        </MessageContext.Provider>
    );
};

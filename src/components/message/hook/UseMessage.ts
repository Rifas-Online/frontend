import React, { useContext } from 'react';
import { MessageContext } from '../../../context/message';

const useMessage = () => {
    const messageContext = useContext(MessageContext);

    if (!messageContext) {
        throw new Error('Error: Missing context value');
    }

    const { setShowMessage, showMessage } = messageContext;

    const handleShowMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3300)
    };

    return {
        handleShowMessage,
        setShowMessage,
        showMessage,
    };
};

export default useMessage;

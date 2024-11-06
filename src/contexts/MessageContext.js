import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState('');

    const setMessageWithLogging = (msg) => {
        setMessage(msg);
    }

    return (
        <MessageContext.Provider value={{ message, setMessage: setMessageWithLogging }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => {
    return useContext(MessageContext);
};

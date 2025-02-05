import React, { createContext, useState } from 'react';

export const Context = createContext({
    toggleForm: false,
    setToggleForm: boolean => { }
});

export const ContextProvider = ({ children }) => {
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <Context.Provider value={{ toggleForm, setToggleForm }
        }>
            {children}
        </Context.Provider>
    );
};

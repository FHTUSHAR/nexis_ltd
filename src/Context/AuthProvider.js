import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let info = {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        password: ''
    }

    const uinfo = { info }
    return (
        <AuthContext.Provider value={uinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
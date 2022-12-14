import React, { createContext } from 'react';
// import useFirebase from '../Pages/hooks/useFirebase';
import useFirebase from '../Pages/hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContext = useFirebase();

    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
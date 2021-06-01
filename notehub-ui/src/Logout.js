import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import AppContext from './AppContext'

function Logout() {
    const context = useContext(AppContext);
    useEffect(() => {
        context.setIsLoggedIn(false);
        context.setToken(null);
    })

    //loalstorage dan tokenı sil

    return (
        <Redirect to="/login?logout=success" />
    );
};

export default Logout;

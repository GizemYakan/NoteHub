import React from 'react';
import { Redirect } from 'react-router';

function Logout() {
    return (
        <Redirect  to="/login?logout=success"/>
    );
};

export default Logout;

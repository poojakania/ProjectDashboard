import React from 'react';
import LeadsLogin from './LeadsLayout/LeadsLogin';

const Layout =({children}) =>{
    return(
        <>
        <div>
        <LeadsLogin />
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;
import React from 'react';
import Header from '../components/Header';

function BasicLayout({children}) {
    return (
        <>
            <div id='commonLayoutContainer'>
                <Header/>
                {children}
            </div>
        </>
    );
}

export default BasicLayout;
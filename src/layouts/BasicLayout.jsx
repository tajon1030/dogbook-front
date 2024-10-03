import React from 'react';
import Header from '../components/Header';

function BasicLayout({children}) {
    return (
        <>
            <div id='commonLayoutContainer'>
                <Header/>
            </div>
        </>
    );
}

export default BasicLayout;
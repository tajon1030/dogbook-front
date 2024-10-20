import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BasicLayout({children}) {
    return (
        <>
            <div id='commonLayoutContainer'>
                <Header/>
                {children}
<<<<<<< Updated upstream
=======
                <Footer/>
>>>>>>> Stashed changes
            </div>
        </>
    );
}

export default BasicLayout;
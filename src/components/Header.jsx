import React from 'react';
import Search from './Search';
import { Category, Logo } from '../util/Icons';

function Header(props) {
    return (
        <header>
            <div>
                <div className='text-center text-customGray font-sans text-xs my-2'>개발자의 서재, 독북</div>
                <div className='header my-2 mx-5'>
                    {/* 독북 로고 및 제목 */}
                    <div className='div-header-title'>
                        <Logo />
                        <span className='header-title text-black'>독북</span>
                    </div>
                    <div>
                        <Category/>
                    </div>
                </div>
            </div>
            <Search></Search>
        </header>
    );
}

export default Header;
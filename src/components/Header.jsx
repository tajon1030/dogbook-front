import React from 'react';
import Search from './Search';
import { CategoryIcon, LogoIcon } from '../util/Icons';

function Header(props) {
    return (
        <header>
            <div>
                <div className='text-center text-customGray font-sans text-xs my-2'>개발자의 서재, 독북</div>
                <div className='flex items-center justify-between my-2 mx-5'>
                    {/* 독북 로고 및 제목 */}
                    <div className='flex items-center my-0 mx-auto div-header-title'>
                        <LogoIcon />
                        <span className='ml-2 header-title text-black text-2xl'>독북</span>
                    </div>
                    <div>
                        <CategoryIcon/>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Search />
            </div>
        </header>
    );
}

export default Header;
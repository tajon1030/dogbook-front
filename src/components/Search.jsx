import React from 'react';
import { SearchIcon } from '../util/Icons';

function Search(props) {
    return (
        <div className='bg-customSearchGray w-80 h-9 rounded-full flex items-center'> {/* flex 사용 */}
            <input
                className='bg-transparent w-full h-full focus:outline-none pl-4 rounded-l-full text-sm'  // width와 height를 부모에 맞춤
                placeholder={"검색어를 입력해주세요"}
            />
            <button className='h-full px-4 rounded-r-full'> {/* 높이를 부모에 맞추고 padding으로 공간 확보 */}
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
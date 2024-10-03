import React from 'react';

function Search(props) {
    return (
        <div className='div-search'>
            <div className='bg-customSearchGray w-80 h-9 rounded-full	'>
                <input className='bg-transparent' placeholder={"검색어를 입력해주세요"}></input>
                <button></button>
            </div>
        </div>
    );
}

export default Search;
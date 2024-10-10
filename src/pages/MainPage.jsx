import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import Slider from '../components/Slider';

function MainPage(props) {
    return (
        <BasicLayout>
            {/* 추천도서 슬라이드 */}
            <div className='bg-indigo-500 h-96 m-4'>
                <div className='m-4'><p className='text-white text-center content-title'>추천 도서</p></div>
                <Slider slidesPerView={1.5} loop={true} centeredSlides={true} spaceBetween={60}/>
            </div>
            {/* 분야별책 슬라이드*/}
            <div className='category'>
                <div><p className='text-black text-center content-title'>분야별 책</p></div>
                <div className='m-4'>
                    <Slider slidesPerView={'auto'} loop={false} centeredSlides={false} spaceBetween={20}/>
                </div>
            </div>
            <div>
            <div className="relative flex justify-center items-center">
                <span className="text-black content-title">중고책</span>
                <span className="absolute right-0">더보기▶</span>
                <div></div>
            </div>
            </div>
        </BasicLayout> 
    );
}

export default MainPage;
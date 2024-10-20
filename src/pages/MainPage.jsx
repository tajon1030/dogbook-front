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
                <div className="relative flex justify-center items-center"
                style={{background: 'linear-gradient(180deg, rgb(238.00000101327896, 238.00000101327896, 238.00000101327896) 0%, rgb(255, 255, 255) 100%)', height: '39px', left: '0px'}}
                >
                    <span className="text-black content-title" style={{lineHeight:'normal'}}>중고책</span>
                    <span className="absolute" style={{fontSize:'10px', right:'10px', color: '#777777'}}>더보기 ▶</span>
                </div>
                {/* 책 목록*/}
                <div style={{height: '258px', display: 'flex', gap: '40px', justifyContent: 'center', padding: '20px'}}>
                    <div>
                        <span style={{backgroundColor: 'transparent', height: '164px',    left: '198px', objectFit: 'cover', width: '124px'}}>
                        <img style={{backgroundColor: 'transparent', height: '164px', left: '198px', objectFit: 'cover', width: '124px'}}
                        src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/rectangle-10@2x.png" 
                        anima-src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/rectangle-10@2x.png" alt="Rectangle 17"/>
                        <img style={{position: 'absolute',transform: 'translate(100px, -20px)'}}
                        src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/vector-1.svg" 
                        anima-src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/vector-1.svg" alt="Vector"></img>
                        </span>
                        <div style={{extAlign: 'left', width: '120px'}}>
                            <span style={{fontSize: '12px', fontWeight: '700'}}>비전공자를 위한 이해할 수 있는 IT 지식 </span>
                            <span style={{fontSize: '10px', fontWeight: '500'}}>| 최원영 </span>
                        </div>
                        <div>
                            <span style={{fontSize: '12px', fontWeight: '700', color: '#0056D6'}}>11,000원 </span>
                            <span style={{fontSize: '10px', fontWeight: '500', color: '#777777'}}>| 판매자 </span>
                        </div>
                    </div>
                    <div>
                        <span style={{backgroundColor: 'transparent', height: '164px',    left: '198px', objectFit: 'cover', width: '124px'}}>
                        <img style={{backgroundColor: 'transparent', height: '164px', left: '198px', objectFit: 'cover', width: '124px'}}
                        src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/rectangle-10@2x.png" 
                        anima-src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/rectangle-10@2x.png" alt="Rectangle 17"/>
                        <img style={{position: 'absolute',transform: 'translate(100px, -20px)'}}
                        src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/vector-1.svg" 
                        anima-src="https://cdn.animaapp.com/projects/670930947f676e69eb66097e/releases/670b2814768c860cb7074f52/img/vector-1.svg" alt="Vector"></img>
                        </span>
                        <div style={{extAlign: 'left', width: '120px'}}>
                            <span style={{fontSize: '12px', fontWeight: '700'}}>비전공자를 위한 이해할 수 있는 IT 지식 </span>
                            <span style={{fontSize: '10px', fontWeight: '500'}}>| 최원영 </span>
                        </div>
                        <div>
                            <span style={{fontSize: '12px', fontWeight: '700', color: '#0056D6'}}>11,000원 </span>
                            <span style={{fontSize: '10px', fontWeight: '500', color: '#777777'}}>| 판매자 </span>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout> 
    );
}

export default MainPage;
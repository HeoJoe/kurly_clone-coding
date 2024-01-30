import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../assets/BannerImg/banner1.jpg';
import banner2 from '../assets/BannerImg/banner2.jpg';
import banner3 from '../assets/BannerImg/banner3.jpg';
import banner4 from '../assets/BannerImg/banner4.jpg';
import ArrowBtn from '../assets/ic_arrowBtn.svg';

const AdBanner = () => {
    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}>
                <SwiperSlide>
                    <SlideImg src={banner1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner4}/>
                </SwiperSlide>
            </Swiper>
            <LeftBtn src={ArrowBtn}/>
            <RighttBtn src={ArrowBtn}/>

        </Container>
    )
}
const Container = styled.div`
    position: relative;
    height: 370px;
    margin: 0px auto 40px;
    overflow: hidden;
    list-style: none;
    padding: 0;
    touch-action: pan-y;
`;
const SlideImg = styled.img`
    width: 100%;
    cursor: pointer;
`;
const LeftBtn = styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 50%;
    margin: auto 590px auto 0px;
    z-index: 10;
    width: 52px;
    height: 52px;
    transition: all 0.5s ease 0s;
    opacity: 1;
    transform: rotate(180deg);
    cursor: pointer;
`;
const RighttBtn = styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 50%;
    margin: auto 0px auto 590px;
    z-index: 10;
    width: 52px;
    height: 52px;
    transition: all 0.5s ease 0s;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
`;
export default AdBanner;
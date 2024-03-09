import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import ProductItem from "./ProductItem";

import productImg1 from '../assets/ProductImg/img_product1.jpg';
import productImg2 from '../assets/ProductImg/img_product2.jpg';
import productImg3 from '../assets/ProductImg/img_product3.jpeg';
import productImg4 from '../assets/ProductImg/img_product4.jpg';
import productImg5 from '../assets/ProductImg/img_product5.jpg';
import productImg6 from '../assets/ProductImg/img_product6.jpg';
import ArrowBtnImg from '../assets/ic_MoreBtn.svg';

const MDRecom = () => {
    const RecomLists = ['간편식·밀키트·샐러드', '과일·견과·쌀', '국·반찬·메인요리', '헤어·바디·구강', '정육·가공육·계란', '생수·음료·커피', '베이커리'];
    const ProductLists = [
        {
            img: productImg1, 
            title: '[이화수] 육개장 칼국수', 
            costPrice: 8900,
            discountRate: 30,
            review: 158,
        },
        {
            img: productImg2, 
            title: '[모두의맛집] 김씨육면 청돈육면', 
            costPrice: 8500,
            discountRate: 37,
            review: 64,
        },
        {
            img: productImg3, 
            title: '[올마레] 춘천 국물 닭갈비 떡볶이', 
            costPrice: 13200,
            discountRate: 16,
            review: 123,
        },
        {
            img: productImg4, 
            title: '[레스토랑 Allen] 라구 에그 생면 파스타', 
            costPrice: 9800,
            discountRate: 0,
            review: 123,
        },
        {
            img: productImg5, 
            title: '[오마뎅] 우리 사과 떡볶이', 
            costPrice: 6900,
            discountRate: 0,
            review: 313,
        },
        {
            img: productImg6, 
            title: '[연남 쌉 : SAAP] 팟타이 2인분', 
            costPrice: 16800,
            discountRate: 12,
            review: 591,
        }
    ]

    const [isClick, setIsClick] = useState(false);
    const [saveIdx, setSaveIdx] = useState(0);
    const [cursorIdx, setCursorIdx] = useState(0);

    const handleOnClick = ( idx ) => {
        setSaveIdx(idx);
    }
    const handleOnMouseOver = ( idx ) => {
        setCursorIdx(idx);
    }

    return (
        <Container>
            <TitleContainer>
                <TitleText>  MD의 추천  </TitleText>
            </TitleContainer>
            <CategoryTitleList>
                {RecomLists.map((item, idx) => (
                    <CategoryTitleItem 
                        key={idx}
                        onClick={() => handleOnClick(idx)}
                        onMouseOver={() => handleOnMouseOver(idx)}
                        onMouseOut={() => handleOnMouseOver(null)}
                        isClick={saveIdx === idx}
                        isMouseOver={cursorIdx === idx}
                    > {item} 
                    </CategoryTitleItem>
                ))}
            </CategoryTitleList>
            <ProductList>
                <ProductListSub>
                    {ProductLists.map((item) => (
                        <ProductItem 
                            img={item.img}
                            title={item.title}
                            costPrice={item.costPrice}
                            discountRate={item.discountRate}
                            review={item.review}/>
                    ))}
                </ProductListSub>
            </ProductList>
            <ArrowBtn src={ArrowBtnImg}/>
            <MoreBtn> 전체보기 </MoreBtn>
        </Container>
    );
};
const Container = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`;
const TitleContainer = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleText = styled.p`
    position: relative;
    display: flex;
    min-height: 48px;
    margin-bottom: -5px;
    padding: 8px 0px 8px 8px;
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
`;
const CategoryTitleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
`;
const CategoryTitleItem = styled.button`
    box-sizing: border-box;
    background-color: ${(props) => (
        props.isClick ? 'rgb(95, 0, 128)' : 
        (props.isMouseOver ? 'rgb(247, 243, 248)' : 'rgb(247, 247, 247)')
    )};
    color: ${(props) => (
        props.isClick ? 'rgb(255, 255, 255)' : 
        (props.isMouseOver ? 'rgb(95, 0, 128)' : 'rgb(51, 51, 51)')
    )};
    display: block;
    padding: 10px 20px;
    border: none;
    border-radius: 22px;
    margin: 0px 5px 20px;
    font-size: 14px;
    height: 40px;
    line-height: 16px;
    cursor: pointer;
`;
const ProductList = styled.div`
    margin: 20px 0 27px;
`;
const ProductListSub = styled.div`
    position: relative;
    width: 1050px;
    margin: 0px auto;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`;
const ArrowBtn = styled.img`
    position: relative;
    bottom: 350px;
    left: 990px;
    width: 60px;
    height: 60px;
    overflow: visible;
    z-index: 300;
    border: 0px;
    outline: 0px;
    transition: background 0.5s ease 0s;
    transform: translate(50%, -50%) rotate(180deg);
    cursor: pointer;
`;
const MoreBtn = styled.button`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 516px;
    height: 56px;
    background-color: ${palette.white};
    border-radius: 3px;
    border: 1px solid rgb(227, 227, 227);
    cursor: pointer;
`;
export default MDRecom;
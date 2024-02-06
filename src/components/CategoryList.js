import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";

import categoryImg1Ori from '../assets/img_categoryImg1_ori.png';
import categoryImg2Ori from '../assets/img_categoryImg2_ori.png';
import categoryImg1Click from '../assets/img_categoryImg1_click.png';
import categoryImg2Click from '../assets/ic_categoryImg2_click.png';

import categorySubImg1 from '../assets/CategoryImg/img_category1.png';
import categorySubImg2 from '../assets/CategoryImg/img_category2.jpg';
import categorySubImg3 from '../assets/CategoryImg/img_category3.jpg';
import categorySubImg4 from '../assets/CategoryImg/img_category4.png';
import categorySubImg5 from '../assets/CategoryImg/img_category5.png';
import categorySubImg6 from '../assets/CategoryImg/img_category6.jpg';
import categorySubImg7 from '../assets/CategoryImg/img_category7.png';
import categorySubImg8 from '../assets/CategoryImg/img_category8.png';
import categorySubImg9 from '../assets/CategoryImg/img_category9.jpg';
import categorySubImg10 from '../assets/CategoryImg/img_category10.png';
import categorySubImg11 from '../assets/CategoryImg/img_category11.png';
import categorySubImg12 from '../assets/CategoryImg/img_category12.png';
import categorySubImg13 from '../assets/CategoryImg/img_category13.png';
import categorySubImg14 from '../assets/CategoryImg/img_category14.png';
import categorySubImg15 from '../assets/CategoryImg/img_category15.png';
import categorySubImg16 from '../assets/CategoryImg/img_category16.png';

const CategoryList = () => {
    const [isHoverFruit, setIsHoverFruit] = useState(false);
    const [isHoverPick, setISHoverPick] = useState(false);

    const SubCategoryFirst = ['친환경', '제철과일', '국산과일','수입과일', '간편과일', '냉동·건과일', '견과류', '쌀·잡곡'];
    const SubCategorySec = [
        { img: categorySubImg1, title: '홈캉스' },
        { img: categorySubImg2, title: '식단관리' }, 
        { img: categorySubImg3, title: '간편한 아침식사' },
        { img: categorySubImg4, title: '재구매 BEST' },
        { img: categorySubImg5, title: '3천원의 행복' },
        { img: categorySubImg6, title: '컬리마트' }, 
        { img: categorySubImg7, title: '대용량 상품' },
        { img: categorySubImg8, title: '캠핑' },
        { img: categorySubImg9, title: '1인 가구' },
        { img: categorySubImg10, title: '비건' }, 
        { img: categorySubImg11, title: '베이커리 맛집' },
        { img: categorySubImg12, title: '오프라인 맛집' },
        { img: categorySubImg13, title: '컬리가 만든 상품' },
        { img: categorySubImg14, title: 'Kurly Only' },
        { img: categorySubImg15, title: 'KF365 / KS365' }, 
        { img: categorySubImg16, title: '희소가치 프로젝트' },
    ];

const handleMouseOver = ( name ) => {
    if (name === 'fruit') 
        setIsHoverFruit(true);
    if (name === 'pick')
        setISHoverPick(true);
};

const handleMouseOut = ( name ) => {
    if (name === 'fruit') 
        setIsHoverFruit(false);
    if (name === 'pick')
        setISHoverPick(false);
};

    return (
        <Container>
            <SubContainer 
                isHoverMouse={isHoverFruit || isHoverPick}
                isOpen={isHoverPick}>
                <CateList>
                    <CategoryItem
                        onMouseOver={() => handleMouseOver('fruit')}
                        onMouseOut={() => handleMouseOut('fruit')}
                        isOpen={isHoverFruit}>
                        <CategoryItemIcon src={isHoverFruit ? categoryImg1Click : categoryImg1Ori}/>
                        <CategoryTitleText isOpen={isHoverFruit}> 과일·견과·쌀 </CategoryTitleText>
                        <SubCategoryList isOpen={isHoverFruit}>
                            {SubCategoryFirst.map((item) => (
                                <SubCategoryItem> {item} </SubCategoryItem>
                            ))}
                        </SubCategoryList>
                    </CategoryItem>
                    <CategoryItem
                        onMouseOver={() => handleMouseOver('pick')}
                        onMouseOut={() => handleMouseOut('pick')}
                        isOpen={isHoverPick}>
                        <CategoryItemIcon src={isHoverPick ? categoryImg2Click : categoryImg2Ori}/>
                        <CategoryTitleText isOpen={isHoverPick}> 컬리의 추천 </CategoryTitleText>
                        <SubCategoryList 
                            style={{width: '560px'}}
                            isOpen={isHoverPick}>
                            <SubCategoryItem>
                                <SubCategoryItemArea>
                                    {SubCategorySec.map((item, idx) => (
                                        <SubCategoryItemSubArea>
                                            <SubCategoryItemIcon src={item.img}/>
                                            <SubCategoryText> {item.title} </SubCategoryText>
                                        </SubCategoryItemSubArea>
                                    ))}
                                </SubCategoryItemArea>
                            </SubCategoryItem>
                        </SubCategoryList>
                    </CategoryItem>
                </CateList>
            </SubContainer>
        </Container>
    );
};
const Container = styled.div`
    max-height: calc(95vh - 55px);
    min-height: 200px;
    position: absolute;
    display: flex;
    top: 46px;
    padding-top: 10px;
`;
const SubContainer = styled.div`
    position: relative;
    background-color: ${palette.white}
    z-index: 299;
    width: ${(props) => props.isHoverMouse ? (props.isOpen ? '807px' : '513px')  : `auto`};
    height: 590px;
    border: 1px solid rgb(221, 221, 221);
    animation: 0.2s linear 0s 1 normal none running animation-tb0mmg;
`;
const CateList = styled.ul`
    overflow-y: auto;
    width: 247px;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${palette.white};
    cursor: pointer;
`;
const CategoryItem = styled.li`
    padding: 7px 0px 9px 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${(props) => (props.isOpen ? `#F7F7F7` : 'none')};;
`;
const CategoryItemIcon = styled.img`
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
`;
const CategoryTitleText = styled.div`
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: ${(props) => (props.isOpen ? `${palette.main}` : `#333333`)};
    font-size: 14px;
    font-weight: ${(props) => (props.isOpen ? 500 : 400)};;
    line-height: 22px;
`;
const SubCategoryList = styled.ul`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    background-color: ${(props) => (props.isOpen ? `#F7F7F7` : 'none')};
    width: 266px;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0px;
    left: 247px;
    z-index: 298;
    padding: 0;
    animation: 0.5s linear 0s 1 normal none running animation-plwpox;
    overflow-y: scroll;
`;
const SubCategoryItem = styled.li`
    padding: 11px 20px 11px 18px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: rgb(51, 51, 51);
    background-color: rgb(247, 247, 247);
    line-height: 22px;
    cursor: pointer;
`;
const SubCategoryItemArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
`;
const SubCategoryItemSubArea = styled.div`
    flex: 0 0 126px;
    height: 142px;
    padding: 0px 10px 0px 0px;
    cursor: pointer;
`;
const SubCategoryItemIcon = styled.img`
    display: block;
    width: 116px;
    height: 88px;
    margin-bottom: 8px;
`;
const SubCategoryText = styled.div`
    font-size: 14px;
    line-height: 18px;
`;
export default CategoryList;
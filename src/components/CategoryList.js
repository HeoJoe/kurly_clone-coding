import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";

import categoryImg1Ori from '../assets/img_categoryImg1_ori.png';
import categoryImg2Ori from '../assets/img_categoryImg2_ori.png';
import categoryImg1Click from '../assets/img_categoryImg1_click.png';

const CategoryList = () => {
    const [isHoverFruit, setIsHoverFruit] = useState(false);
    const [isHoverPick, setISHoverPick] = useState(false);

    const SubCategoryFirst = ['친환경', '제철과일', '국산과일','수입과일', '간편과일', '냉동·건과일', '견과류', '쌀·잡곡'];
    const SubCategorySec = ['홈캉스', '식단관리', '간편한 아침식사', '재구매 BEST', '3천원의 행복', '컬리마트', '대용량 상품', '캠핑', '1인 가구', '비건', '베이커리 맛집', '오프라인 맛집', 
'컬리가 만든 상품', 'Kurly Only', 'KF365/KS365', '희소가치 프로젝트'];

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
            <SubContainer>
                <CateList>
                    <CategoryItem
                        onMouseOver={() => handleMouseOver('fruit')}
                        onMouseOut={() => handleMouseOut('fruit')}>
                        <CategoryItemIcon src={isHoverFruit ? categoryImg1Click : categoryImg1Ori}/>
                        <CategoryTitleText> 과일·견과·쌀 </CategoryTitleText>
                        <SubCategoryList
                            className={isHoverFruit ? 'open' : 'hide'}>
                            {SubCategoryFirst.map((item) => (
                                <SubCategoryItem> {item} </SubCategoryItem>
                            ))}
                        </SubCategoryList>
                    </CategoryItem>
                    <CategoryItem
                        onMouseOver={() => handleMouseOver('pick')}
                        onMouseOut={() => handleMouseOut('pick')}>
                        <CategoryItemIcon src={categoryImg2Ori}/>
                        <CategoryTitleText> 컬리의 추천 </CategoryTitleText>
                        <SubCategoryList
                            className={isHoverPick ? 'open' : 'hide'}>
                            {SubCategorySec.map((item) => (
                                <SubCategoryItem> {item} </SubCategoryItem>
                            ))}
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
    width: 517px;
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
    align-items: flex-start;
    /* background-color: rgb(247, 247, 247); */
`;
const CategoryItemIcon = styled.img`
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
`;
const CategoryTitleText = styled.div`
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: ${(props) => (props.className === 'open' ? `${palette.main}` : `rgb(51, 51, 51)`)};
    font-size: 14px;
    font-weight: ${(props) => (props.className === 'open' ? 500 : 400)};;
    line-height: 22px;
`;
const SubCategoryList = styled.ul`
    display: ${(props) => (props.className === 'open' ? 'block' : 'none')};
    background-color: ${(props) => (props.className === 'open' ? `rgb(247, 247, 247)` : 'none')};
    width: 266px;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    top: -1px;
    left: 247px;
    z-index: 298;
    padding: 0;
    animation: 0.5s linear 0s 1 normal none running animation-plwpox;
`;
const SubCategoryItem = styled.li`
    padding: 11px 20px 11px 18px;
    display: flex;
    width: 100%;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: rgb(51, 51, 51);
    background-color: rgb(247, 247, 247);
    line-height: 22px;
    cursor: pointer;
`;
export default CategoryList;
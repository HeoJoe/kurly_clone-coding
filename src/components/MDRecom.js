import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";

const MDRecom = () => {
    const RecomLists = ['간편식·밀키트·샐러드', '과일·견과·쌀', '국·반찬·메인요리', '헤어·바디·구강', '정육·가공육·계란', '생수·음료·커피', '베이커리'];

    const [isClick, setIsClick] = useState(false);
    const [saveIdx, setSaveIdx] = useState(0);

    const handleOnClick = ( idx ) => {
        setSaveIdx(idx);
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
                        isShow={saveIdx === idx}
                    > {item} 
                    </CategoryTitleItem>
                ))}
            </CategoryTitleList>
            <ProductList>

            </ProductList>
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
    background-color: ${(props) => (props.isShow ? 'rgb(95, 0, 128)' : 'rgb(247, 247, 247)')};
    color: ${(props) => (props.isShow ? 'rgb(255, 255, 255)' : 'rgb(51, 51, 51)')};
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
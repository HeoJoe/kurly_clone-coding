import styled from "styled-components";

import DeliImg from '../assets/img_DeliveryInfo.jpg';
import ProductDetail from '../assets/ic_ProductDetail.svg';

const SmallAdnBanner = () => {
    return (
        <Container>
            <SubContainer>
                <ImgContainer>
                    <DeliveryImg src={DeliImg}/>
                </ImgContainer>
                <SelectContainer>
                    <SubText> 등급별 헤택 </SubText>
                    <SubText> 레시피 </SubText>
                </SelectContainer>
                <ProductContainer>
                    <MoreBtn src={ProductDetail}/>
                    최근 본 상품
                    <ProductListContainer>
                        <ProductList>
                            <ProductImgItem></ProductImgItem>
                        </ProductList>
                    </ProductListContainer>
                    <MoreBtn 
                        src={ProductDetail}
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </ProductContainer>
            </SubContainer>
        </Container>
    );
};
const Container = styled.div`
    position: absolute;
    top: 516px;
    right: 20px;
    bottom: 0px;
    z-index: 1;
    margin-top: 236px;
`;
const SubContainer = styled.div`
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.3px;
`;
const ImgContainer = styled.div`
    height: 120px;
    margin-bottom: 7px;
    cursor: pointer;
`;
const DeliveryImg = styled.img`
    /* position: absolute; */
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
`;
const SelectContainer = styled.div`
    width: 80px;
    border: 1px solid rgb(221, 221, 221);
    border-bottom-style: initial;
    border-bottom-color: initial;
    background-color: rgb(255, 255, 255);
`;
const SubText = styled.div`
    height: 22px;
    padding-top: 5px;
    text-align: center;
    border-bottom: 1px solid rgb(221, 221, 221);
    cursor: pointer;
`;
const ProductContainer = styled.div`
    margin-top: 8px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`;
const MoreBtn = styled.img`
    width: 20px;
    height: 20px;
`;
const ProductListContainer = styled.div`
    max-height: 209px;
    overflow: hidden;
    margin-top: 6px;
`;
const ProductList = styled.ul`
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProductImgItem = styled.li`
    display: block;
    height: 80px;
    margin: 2px 0px;
`;
export default SmallAdnBanner;
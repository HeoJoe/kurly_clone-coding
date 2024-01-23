import { useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

import titleImg from '../assets/img_TitleImg.svg'
import searchBtn from '../assets/ic_SearchBtn.svg'
import deliveryBtn from '../assets/ic_DeliveryBtn.svg';
import keepBtn from '../assets/ic_KeepBtn.svg';
import cartBtn from '../assets/ic_CartBtn.svg';
import downBtn from '../assets/ic_downBtn.png';
import CategoryImg from '../assets/ic_categoryImg.svg';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [search, setSearch] = useState('');

    const MoreMenuTitle = ['공지사항', '자주하는 질문', '1:1 문의', '대량주문 문의'];
    const ProductMenuTitle = ['신상품', '베스트', '알뜰쇼핑', '특가/혜택'];

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Container>
            <SubContainer>
                <HeaderTop>
                    <SubMenu style={{ color: `${palette.main}` }}> 회원가입 </SubMenu>
                    <GrayLine/>
                    <SubMenu> 로그인 </SubMenu>
                    <GrayLine/>
                    <CustomerService>
                        <SubMenu> 고객센터 </SubMenu>
                        <MoreBtn 
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            src={downBtn}/>
                        <MoreMenuList 
                            className={isHovering ? 'open' : 'close'}
                            close={isHovering}>
                            {MoreMenuTitle.map((item) => (
                                <MoreMenu> {item} </MoreMenu>
                            ))}
                        </MoreMenuList>
                    </CustomerService>
                </HeaderTop>
                <HeaderMid>
                    <SubHeaderMid>
                        <TitleImg src={titleImg}/>
                        <TitleText> 마켓컬리 </TitleText>
                    </SubHeaderMid>
                    <SearchContainer>
                        <InputBox
                            type='text'
                            value={search}
                            placeholder='검색어를 입력해주세요'
                            onChange={onChange}
                        />
                        <SearchBtn src={searchBtn}/>
                    </SearchContainer>
                    <IconContainer>
                        <DeliveryKeepIcon src={deliveryBtn}/>
                        <DeliveryKeepIcon src={keepBtn}/>
                        <CartIcon src={cartBtn}/>
                    </IconContainer>
                </HeaderMid>
                <HeaderBottom>
                    <HeaderSubBottom>
                        <CategoryContainer>
                            <CateImg src={CategoryImg}/>
                            <CateText> 카테고리 </CateText>
                        </CategoryContainer>
                        <ProductMenuList>
                            {ProductMenuTitle.map((item) => (
                                <ProductMenuItem>
                                    <ProductMenuText> {item} </ProductMenuText>
                                </ProductMenuItem>
                            ))}
                        </ProductMenuList>
                        <DeliveryNotice>
                            <NoticeText> 샛별・하루 </NoticeText> &nbsp; 배송안내
                        </DeliveryNotice>
                    </HeaderSubBottom>
                </HeaderBottom>
            </SubContainer>
        </Container>
    )
}
const Container = styled.div`
    /* box-sizing: border-box;
    margin: 0; */
`;
const SubContainer = styled.div`
    position: relative;
    width: 1050px;
    height: 100px;
    margin: 0px auto;
    letter-spacing: -0.3px;
`;
// 헤더 최상단
const HeaderTop = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    align-items: center;
    font-size: 13px;
`;
// 회원가입-로그인-고객센터
const SubMenu = styled.div`
    color: ${palette.sub};
    display: block;
    cursor: pointer;
`;
const GrayLine = styled.div`
    width: 1px;
    height: 13px;
    margin: 0px 12px;
    background-color: rgb(217, 217, 217);
`;
const CustomerService = styled.div`
    line-height: 35px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MoreBtn = styled.img`
    width: 8px;
    height: 5px;
    background-size: cover;
    background-position: center center;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 1px;
    cursor: pointer;
`;
const MoreMenuList = styled.div`
    display: ${(props) => (props.className === 'open' ? 'block' : 'none')};
    position: absolute;
    width: 130px;
    top: 34px;
    right: 0px;
    padding: 3px 9px;
    border: 1.5px solid #D9D9D9;
    background-color: ${palette.white};
    z-index: 100;
`;
const MoreMenu = styled.div`
    display: block;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
`;
// 헤더 중간 부분
const HeaderMid = styled.div`
    height: 100px;
    padding-top: 36px;
`;
const SubHeaderMid = styled.div`
    display: flex;
    align-items: center;
    height: 63px;
`;
const TitleImg = styled.img`
    flex: 0 0 82px;
    cursor: pointer;
`;
const TitleText = styled.p`
    font-weight: 500;
    color: ${palette.main};

    flex-shrink: 0;
    margin-left: 20px;
    font-size: 19px;
    line-height: 1.33;
    cursor: pointer;
`;
// 검색창
const SearchContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    top: 45px;
    left: 325px;
    width: 400px;
    height: 48px;
    padding-left: 14px;
    border: 1.5px solid ${palette.main};
    border-radius: 6px;
    background-color: ${palette.white};
    box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
`;
const InputBox = styled.input`
    width: 300px;
    border: none;
    outline: none;      // 파란선 없애기
    margin-top: 2px;
    
    font-size: 17px;
    letter-spacing: -0.33px;
`;
const SearchBtn = styled.img`
    position: relative;
    margin: 8px;
    background: 0px 0px no-repeat;
    cursor: pointer;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: -6px;
    top: 49px;
`;
const DeliveryKeepIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
    background: 50% 50% no-repeat;
    cursor: pointer;
`;
const CartIcon = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;
`;
// 헤더 최하단
const HeaderBottom = styled.div`
    min-width: 1050px;
    width: 100%;
    letter-spacing: -0.3px;
    background-color: ${palette.white};
    position: relative;
    margin-top: -30px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
`;
const HeaderSubBottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1050px;
    height: 56px;
    margin: 0px auto;
`;
const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const CateImg = styled.img`
    width: 20px;
    height: 14px;
    margin-bottom: 3px;
    margin-right: 14px;
`;
const CateText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
`;
const ProductMenuList = styled.ul`
    display: flex;
    /* margin-left: 30px; */
    margin: 0 auto;
`;
const ProductMenuItem = styled.li`
    display: flex;
    justify-content: center;
    width: 150px;
    height: 55px;
    line-height: 20px;
    text-align: center;
`;
const ProductMenuText = styled.p`
    height: fit-content;
    font-size: 18px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    cursor: pointer;
`;
const DeliveryNotice = styled.div`
    display: flex;
    align-items: center;

    height: 32px;
    padding: 1px 14px 0 14px;
    border-radius: 18px;
    border: 1.5px solid rgb(238, 238, 238);
    color: rgb(102, 102, 102);
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.32px;
`;
const NoticeText = styled.p`
    font-weight: 500;
    color: ${palette.main};
`;
export default Header;
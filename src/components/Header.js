import { useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

import titleImg from '../assets/img_TitleImg.svg'
import searchBtn from '../assets/ic_SearchBtn.svg'
import deliveryBtn from '../assets/ic_DeliveryBtn.svg';
import keepBtn from '../assets/ic_KeepBtn.svg';
import cartBtn from '../assets/ic_CartBtn.svg';
import downBtn from '../assets/ic_downBtn.png';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [search, setSearch] = useState('');

    const MoreMenuTitle = ['공지사항', '자주하는 질문', '1:1 문의', '대량주문 문의'];

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
                        <DeliveryIcon src={deliveryBtn}/>
                        <KeepIcon src={keepBtn}/>
                        <CartIcon src={cartBtn}/>
                    </IconContainer>
                </HeaderMid>
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
    cursor: pointer;
`;
const TitleText = styled.p`
    font-weight: 500;
    color: ${palette.main};

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
    border: none;
    margin-top: 2px;
    outline: none;      // 파란선 없애기

    font: inherit;
`;
const SearchBtn = styled.img`
    position: relative;
    margin: 8px;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: -6px;
    top: 49px;
`;
const DeliveryIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
    cursor: pointer;
`;
const KeepIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
    cursor: pointer;
`;
const CartIcon = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;
`;
export default Header;
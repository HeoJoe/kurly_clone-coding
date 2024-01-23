import { useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

import titleImg from '../assets/img_TitleImg.svg'
import searchBtn from '../assets/ic_SearchBtn.svg'
import deliveryBtn from '../assets/ic_DeliveryBtn.svg';
import keepBtn from '../assets/ic_KeepBtn.svg';
import cartBtn from '../assets/ic_CartBtn.svg';

const Header = () => {
    const [clicked, setClicked] = useState('signUp');
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    const clickMenu = ( value ) => setClicked(value);

    return (
        <Container>
            <SubContainer>
                <HeaderTop>
                    <SubMenu 
                        className={clicked === 'signUp' ? 'click' : 'notClick'}
                        onClick={() => clickMenu('signUp')}> 회원가입 </SubMenu>
                    <GrayLine/>
                    <SubMenu 
                        className={clicked === 'signIn' ? 'click' : 'notClick'}
                        onClick={() => clickMenu('signIn')}> 로그인 </SubMenu>
                    <GrayLine/>
                    <SubMenu 
                        className={clicked === 'inquiry' ? 'click' : 'notClick'}
                        onClick={() => clickMenu('inquiry')}> 고객센터 </SubMenu>
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
    box-sizing: border-box;
    margin: 0;
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
    top: 0px;
    right: 0px;
    display: flex;
    position: absolute;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;
// 회원가입-로그인-고객센터
const SubMenu = styled.div`
    color: ${(props) => props.className === 'click' ? `${palette.main}` : `${palette.sub}`};
    font-size: 12px;

    display: block;
    cursor: pointer;
`;
const GrayLine = styled.div`
    width: 1px;
    height: 13px;
    margin: 0px 12px;
    background-color: rgb(217, 217, 217);
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
    font-size: 18px;
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
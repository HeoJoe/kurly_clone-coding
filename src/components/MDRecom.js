import { useState } from "react";
import styled from "styled-components";

const MDRecom = () => {
    const RecomLists = ['간편식·밀키트·샐러드', '과일·견과·쌀', '국·반찬·메인요리', '헤어·바디·구강', '정육·가공육·계란', '생수·음료·커피', '베이커리'];

    const [isClick, setIsClick] = useState(false);
    const [saveIdx, setSaveIdx] = useState(0);

    const handleOnClick = ( e, idx ) => {
        setSaveIdx(idx);
    }

    return (
        <Container>
            <MDRecomTitleContainer>
                <MDRecomTitleText>  MD의 추천  </MDRecomTitleText>
                <RecomList>
                    {RecomLists.map((item, idx) => (
                        <RecomItem 
                            key={idx}
                            onClick={e => handleOnClick(e, idx)}
                            isShow={saveIdx === idx}
                        > {item} </RecomItem>
                    ))}
                </RecomList>
            </MDRecomTitleContainer>
        </Container>
    );
};
const Container = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`;
const MDRecomTitleContainer = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MDRecomTitleText = styled.p`
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
const RecomList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
`;
const RecomItem = styled.button`
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
export default MDRecom;
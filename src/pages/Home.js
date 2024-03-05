import { useEffect, useState } from "react";
import styled from "styled-components";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header";
import MDRecom from "../components/MDRecom";
import SmallAdnBanner from "../components/SmallAdBanner";

const Home = () => {
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        if (window.screenY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <AdBanner/>
            <MDRecom/>
            {scroll && <SmallAdnBanner/>}
        </Container>
    );
}
const Container = styled.div`
    /* width: 100%; */
    margin: 0;
`;
export default Home;
import { useEffect, useState } from "react";
import styled from "styled-components";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header";
import MDRecom from "../components/MDRecom";
import SmallAdnBanner from "../components/SmallAdBanner";

const Home = () => {
    return (
        <Container>
            <AdBanner/>
            <MDRecom/>
            <SmallAdnBanner/>
        </Container>
    );
}
const Container = styled.div`
    /* width: 100%; */
    margin: 0;
`;
export default Home;
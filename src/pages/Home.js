import styled from "styled-components";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header";
import MDRecom from "../components/MDRecom";

const Home = () => {
    return (
        <Container>
            <AdBanner/>
            <MDRecom/>
        </Container>
    );
}
const Container = styled.div`
    /* width: 100%; */
    margin: 0;
`;
export default Home;
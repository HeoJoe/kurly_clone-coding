import styled from "styled-components";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header";

const Home = () => {
    return (
        <Container>
            <AdBanner/>
        </Container>
    );
}
const Container = styled.div`
    /* width: 100%; */
    margin: 0;
`;
export default Home;
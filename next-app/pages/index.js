import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

export default function Home() {

    return (
        <Container>
            <Sidebar />
        </Container>
    );
}

const Container = styled.div`
    /* background-color: lightgray; */
    overflow-y: scroll;
`;

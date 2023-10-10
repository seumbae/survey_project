import styled from "styled-components";

const BorderBox = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default BorderBox;

const Container = styled.div`
    border: 5px solid #21487f;
    padding: 40px 40px;
    width: -webkit-fill-available;
`
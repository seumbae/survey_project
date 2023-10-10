import styled from "styled-components";

const RelativeContainer = ({children}) => {
    return <Container>{children}</Container>
}

export default RelativeContainer;

const Container = styled.div`
    // display: flex;
    width:100%;
    height: inherit;
    position: relative;
`


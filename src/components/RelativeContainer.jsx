import styled from "styled-components";

const RelativeContainer = ({children}) => {
    return <Container>{children}</Container>
}

export default RelativeContainer;

const Container = styled.div`
    width:100%;
    height: inherit;
    position: relative;
`
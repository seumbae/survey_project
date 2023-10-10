import styled from "styled-components";

const ContentContainer = ({children}) => {
    return (<Container>{children}</Container>)
}

export default ContentContainer;

const Container = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
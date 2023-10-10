import styled from "styled-components";

const Title = ({ children }) => {
    return (<Container>{children}</Container>)
}

export default Title;

const Container = styled.div`
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 40px;
`
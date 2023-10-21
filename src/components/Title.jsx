import styled from "styled-components";

const Title = ({ children }) => {
    return (<Container>{children}</Container>)
}

export default Title;

const Container = styled.div`
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 2rem;
    }

    @media (max-width: 767px) {
        font-size: 1.5rem;
    }
`
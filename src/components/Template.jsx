import styled from "styled-components";

const Template = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Template;

const Container = styled.div`
    height: 80%;

    @media (min-width: 1024px){
        padding: 5rem 8rem 0 8rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 5rem 8rem 0 8rem;
    }

    @media (max-width: 767px) {
        padding: 3rem 3rem 0 3rem;
    }
`;

import styled from "styled-components";

const Template = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Template;

const Container = styled.div`
    padding: 80px 150px 0 150px;
    height: 80%;
`;

import styled from "styled-components";

const ButtonContainer = ({ children }) => {
	return <Container>{children}</Container>;
};

export default ButtonContainer;

const Container = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
`;

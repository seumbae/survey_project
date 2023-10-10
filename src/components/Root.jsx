import styled from "styled-components";

const Root = (props) => {
	return <Container gap={props.gap}>{props.children}</Container>;
};

export default Root;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

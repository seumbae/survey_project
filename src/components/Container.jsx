import styled from "styled-components";

const Container = (props) => {
	return (
		<Root
			width={props.width}
			height={props.height}
            display={props.display}
			flexDirection={props.flexDirection}
			justifyContent={props.justifyContent}
			alignItems={props.alignItems}
			margin={props.margin}
			gap={props.gap}
            alignSelf={props.alignSelf}
            padding={props.padding}
		>
			{props.children}
		</Root>
	);
};

export default Container;

const Root = styled.div`
	width: ${(props) => (props.width ? props.width: "")};
	height: ${(props) => (props.height ? props.height : "auto")};
	display: ${(props) => (props.display ? props.display : "")};
	flex-direction: ${(props) =>
		props.flexDirection ? props.flexDirection : ""};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : ""};
	align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
    padding: ${(props) => (props.padding ? props.padding : "")};
	margin: ${(props) => (props.margin ? props.margin : "")};
	gap: ${(props) => (props.gap ? props.gap + "px" : "")};
    align-self: ${(props) => (props.alignSelf ? props.alignSelf : "")};
`;

import styled from "styled-components";

export const SelectionWrapper = styled.div`
    border: ${props => props.border ===  true ? "1px solid #21487f" : "none"};
	border-radius: 35px;
	padding: 15px 30px;
	width: fit-content;
	display: flex;
	gap: 20px;
	align-self: end;
    flex-wrap: wrap;
`;

export const ContentsWrapper = styled.div`
    border: 2px solid  #21487f;
    border-radius: 10px;
`

export const ContentContainer = styled.div`
    font-size: 0.9rem;
    padding: 10px 20px;
    padding-right: 0;
`

export const FlexBoxSBwithBorder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000000;
    flex-wrap: wrap;

    &:last-child {
        border-bottom: none;
    }
`

export const Content = styled.div`
    align-self: center;
    margin-top: ${props => props.marginTop ? props.marginTop : ""};
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
import styled from "styled-components";

export const SelectionWrapper = styled.div`
	border: 1px solid #21487f;
	border-radius: 35px;
	padding: 15px 30px;
	width: fit-content;
	display: flex;
	gap: 20px;
	align-self: end;
`;

export const ContentsWrapper = styled.div`
    border: 2px solid  #21487f;
    border-radius: 10px;
    // &:last-child {
    //     border-bottom: none;
    // }
`

export const ContentContainer = styled.div`
    padding: 10px 20px;
    padding-right: 0;
`

// TODO: 이름 변경하고 padding 추가해야함
export const FlexBoxSBwithBorder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000000;
    &:last-child {
        border-bottom: none;
    }
`
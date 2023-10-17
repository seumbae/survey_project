import styled from "styled-components";
import { SelectionWrapper } from "./Common";

const AnswerBtn = (props) => {
    const selection = ["전혀 그렇지 않다", "그렇지 않다", "보통이다", "그렇다", "매우 그렇다"]

    return (
        <SelectionWrapper border={props.border} id={props.index}>
            {selection.map((item, index) => {
                return (
                    <Container key={index} id={index} onClick={props.onClick} clicked={props.clicked === index}>
                        {item}
                    </Container>
                )
            })}
        </SelectionWrapper>
    )
}

export default AnswerBtn;

const Container = styled.div`
    text-align : center;
    border : 2px solid #21487f;
    border-radius : 20px;
    width: 120px;
    padding : 10px 10px;  
    cursor: pointer;
    background-color: ${props => props.clicked ? "#21487f" : "#ffffff"};
    color: ${props => props.clicked ? "#ffffff" : "#000000"};
`
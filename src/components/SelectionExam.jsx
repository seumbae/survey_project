import styled from "styled-components";
import { SelectionWrapper } from "./Common";

const SelectionExam = (props) => {
    const selection = ["전혀 그렇지 않다", "그렇지 않다", "보통이다", "그렇다", "매우 그렇다"]

    return (
        <SelectionWrapper border={props.border}>
            {selection.map((item, index) => {
                return (
                    <Container key={index}>
                        {item}
                    </Container>
                )
            })}
        </SelectionWrapper>
    )
}

export default SelectionExam;

const Container = styled.div`
    text-align : center;
    border : 2px solid #21487f;
    border-radius : 20px;
    padding : 10px 10px;
    width: 6rem;
    font-size: 0.8rem;
`
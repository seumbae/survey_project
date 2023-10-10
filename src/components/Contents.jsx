import styled from "styled-components"

const Contents = (props) => {
    return <Content fontSize={props.fontSize} color={props.color}>{props.children}</Content>
}

export default Contents;

const Content = styled.div`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
    color: ${(props) => (props.color ? props.color : "#000000")}
`

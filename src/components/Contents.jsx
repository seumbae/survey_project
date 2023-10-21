import styled from "styled-components"

const Contents = (props) => {
    return <Content width={props.width} marginRight={props.marginRight} bold={props.bold} color={props.color}>{props.children}</Content>
}

export default Contents;

const Content = styled.div`
    @media (min-width: 1024px){
        font-size:1.3rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.3rem;
    }

    @media (max-width: 767px) {
        font-size: 1rem;
    }
    width: ${(props) => (props.width ? props.width : "")};
    color: ${(props) => (props.color ? props.color : "#000000")};
    font-weight: ${(props) => (props.bold ? "bold" : "")};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
`

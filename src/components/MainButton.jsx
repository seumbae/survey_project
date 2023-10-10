import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Btn = styled.div`
    width: 120px;
    height: 30px;
    background-color: #21487f;
    color: #ffffff;
    border: none;
    border-radius: 30px;
    padding: 10px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const ArrowIcon = styled(ArrowForwardIcon)`
    font-size: 2rem;
    color: #ffffff;
`

const MainButton = (props) => {
    const { onClick } = props;

    return(
        <Btn style={{justifyContent: props.flag ? "space-evenly" : "center"}} onClick={onClick}>
            {props.content}
            {props.flag ? <ArrowIcon />: null}
        </Btn>
    );
}
export default MainButton;
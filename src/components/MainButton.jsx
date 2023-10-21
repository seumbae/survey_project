import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Btn = styled.div`
    background-color: #21487f;
    color: #ffffff;
    border: none;
    border-radius: 30px;
    padding: 10px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;

    @media (min-width: 1024px){
        width: 7.5rem;
        height: 1.8rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 6rem;
        height: 1.6rem;
    }

    @media (max-width: 767px) {
        width: 5rem;
        height: 1.5rem;
        font-size: 0.9rem;
    }
    
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
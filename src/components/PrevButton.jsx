import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    justify-content: space-evenly;

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
    }
`

const ArrowIcon = styled(ArrowBackIcon)`
    font-size: 2rem;
    color: #ffffff;
`

const PrevButton = (props) => {
    const { onClick } = props;

    return(
        <Btn onClick={onClick}>
            <ArrowIcon />
            {props.content}
        </Btn>
    );
}
export default PrevButton;
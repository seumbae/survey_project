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
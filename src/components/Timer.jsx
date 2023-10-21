import styled from "styled-components";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const Timer = ({time}) => {
    const timeFormat = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    
    return <Container><TimerOutlinedIcon /><span>{timeFormat(time)}</span></Container>
}

export default Timer;

const Container = styled.div`
    height: fit-content;   
    border: 2px solid #21487f;
    border-radius: 25px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 1024px){
      padding: 10px 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.2rem;
  }

  @media (max-width: 767px) {
      padding: 5px 10px;
      font-size: 0.8rem;
  }
`
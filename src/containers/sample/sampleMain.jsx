import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import TimerContainer from "../common/TimerContainer";

const SampleMain = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [time, setTime] = useState(localStorage.getItem('timeLeft') || 2);

	useEffect(() => {
		if (location.state === null || location.state.flag === false) {
            // navigate("/");
		}
	}, []);

    return (
        <Container height="inherit" display="flex" flexDirection="column" gap="30" >
            <Container display="flex" justifyContent="space-between">
                <Title>예시문제</Title>
                <TimerContainer time={time} setTime={setTime}/>
            </Container>
            <div>
                hello
            </div>
            <div>
                hello
            </div>
        </Container>
    )
}

export default SampleMain;
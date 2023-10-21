import { useEffect } from "react";
import Timer from "../../components/Timer";
import { useNavigate } from "react-router-dom";

const TimerContainer = ({ time, setTime, formType, onComplete }) => {
	const navigate = useNavigate();
	useEffect(() => {
		const endTime = Date.now() + time * 1000; // 종료 시간
		const timerInterval = setInterval(() => {
			const now = Date.now();
			const remainingTime = endTime - now;

			if (remainingTime <= 0) {
				clearInterval(timerInterval);
				localStorage.removeItem("timeLeft"); // 타이머 종료 시 localStorage 삭제
				setTime(0);
				if (formType === 0) {
					onComplete();
					alert("개인 성향 관련 검사가 종료되었습니다.");
					navigate("/survey/1", { state: { flag: true, index: 1 } });
				} else if (formType === 1) {
					alert("보안 관련 검사가 종료되었습니다.");
					navigate("/done", { state: { flag: true } });
				}
			} else {
				setTime(Math.ceil(remainingTime / 1000));
				localStorage.setItem("timeLeft", Math.ceil(remainingTime / 1000));
			}
		}, 1000); // 1초마다 갱신

		return () => {
			clearInterval(timerInterval);
		};
	}, [time]);

	return <Timer time={time} />;
};

export default TimerContainer;

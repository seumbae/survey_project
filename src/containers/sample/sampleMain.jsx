import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import TimerContainer from "../common/TimerContainer";
import SelectionExam from "../../components/SelectionExam";
import {
	ContentContainer,
	ContentsWrapper,
	FlexBoxSBwithBorder,
} from "../../components/Common";
import AnswerBtn from "../../components/AnswerBtn";
import MainButton from "../../components/MainButton";
import Contents from "../../components/Contents";

const SampleMain = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [time, setTime] = useState(localStorage.getItem("timeLeft") || 180);
	const contents = ["나는 정서적으로 안정되어 있다."];
	const [checked, setChecked] = useState({});

	useEffect(() => {
		if (location.state === null || location.state.flag === false) {
			navigate("/");
		}
	}, []);

	const onCheckHandler = (e) => {
		e.preventDefault();

		if (checked[e.target.parentElement.id] === Number(e.target.id)) {
			setChecked({ ...checked, [e.target.parentElement.id]: null });
		} else
			setChecked({
				...checked,
				[e.target.parentElement.id]: Number(e.target.id),
			});
	};

	const onClickHandler = (index, e) => {
		if (Object.values(checked).every((item) => item !== -1)) {
			if (localStorage.getItem("timeLeft") !== undefined) {
				localStorage.removeItem("timeLeft");
			}
			alert("설문을 시작합니다.");
			navigate(`/survey/0`, { state: { flag: true, index: 0, formType: 0 } });
		} else {
			alert("예시 문항에 답해주세요.");
		}
	};

	const onHandleComplete = () => {
		alert("설문을 시작합니다.");
		navigate(`/survey/0`, { state: { flag: true, index: 0, formType: 0 } });
	};

	return (
		<Container height="inherit" display="flex" flexDirection="column" gap="30">
			<Container display="flex" justifyContent="space-between">
				<Title>예시문제</Title>
				<TimerContainer
					time={time}
					setTime={setTime}
					onComplete={onHandleComplete}
				/>
			</Container>
			<SelectionExam border={true} />
			<ContentsWrapper>
				{contents.map((content, index) => {
					return (
						<FlexBoxSBwithBorder>
							<ContentContainer key={index}>
								{index + 1}. {content}
							</ContentContainer>
							<AnswerBtn
								onClick={onCheckHandler}
								index={index}
								clicked={checked[index]}
							/>
						</FlexBoxSBwithBorder>
					);
				})}
			</ContentsWrapper>
			<Container display="flex" flexDirection="column" width="100%" gap="10">
				<Container alignSelf="end">
					<MainButton
						content="다음"
						flag={true}
						onClick={(e) => onClickHandler(2, e)}
					/>
				</Container>
                <Container alignSelf="end">
                    <Contents color="#888888">
                        다음 창으로 넘어가시면 실제 인성검사가 실행됩니다.
                    </Contents>
                </Container>
			</Container>
		</Container>
	);
};

export default SampleMain;

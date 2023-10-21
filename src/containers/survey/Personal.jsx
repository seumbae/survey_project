import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnswerBtn from "../../components/AnswerBtn";
import {
	ContentContainer,
	ContentsWrapper,
	FlexBoxSBwithBorder,
	FlexContainer,
} from "../../components/Common";
import Container from "../../components/Container";
import MainButton from "../../components/MainButton";
import SelectionExam from "../../components/SelectionExam";
import Title from "../../components/Title";
import TimerContainer from "../common/TimerContainer";
import PrevButton from "../../components/PrevButton";
import { getPersonalQuestions, postAnswer } from "../../services/sevice";
import Contents from "../../components/Contents";

const Personal = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [userId, setUserId] = useState(null);
	const [time, setTime] = useState(localStorage.getItem("timeLeft") || 210);
	const [checked, setChecked] = useState({});
	const [current, setCurrent] = useState(1);

	const [contents, setContents] = useState([]);
	const delimiter = 10;

	useEffect(() => {
		if (location.state === null) {
			navigate("/");
		}

		getPersonalQuestions(1)
			.then((res) => {
				if (res.status === 200) {
					setContents(res.data);
					setUserId(localStorage.getItem("userId"));
					setChecked(
						Object.fromEntries(
							Array.from({ length: res.data.length }, (_, i) => [i + 1, -1])
						)
					);
				}
			})
			.catch((err) => {
				alert("문항 불러오기에 실패했습니다. 관리자에게 문의하십시오.");
				navigate("/");
			});
	}, []);

	const onCheckHandler = (e) => {
		e.preventDefault();
		if (checked[e.target.parentElement.id] === Number(e.target.id)) {
			setChecked({ ...checked, [e.target.parentElement.id]: -1 });
		} else {
			setChecked({
				...checked,
				[e.target.parentElement.id]: Number(e.target.id),
			});
		}
	};

	const onPrevHandler = (e) => {
		if (current === 1) {
			alert("이전 문항이 존재하지 않습니다.");
		} else {
			setCurrent(current - 1);
		}
	};

	const onNextHandler = (e) => {
		const start = (current - 1) * delimiter;
		const end = start + delimiter;

		if (
			Object.values(checked)
				.slice(start, end)
				.some((item) => item === -1)
		) {
			alert("모든 문항에 답해주세요.");
		} else if (contents.length < delimiter * current) {
			if (localStorage.getItem("timeLeft") !== undefined) {
				localStorage.removeItem("timeLeft");
			}
			onHandleComplete();
			alert("감사합니다. 개인 성향 관련 검사를 종료합니다.");
			navigate(`/survey/1`, { state: { flag: true, index: 1 } });
		} else {
			setCurrent(current + 1);
		}
	};

	const onHandleComplete = () => {
		const data = [];
		Object.entries(checked).forEach(([key, value]) => {
			data.push({
				Score: value,
				FormId: key,
				UserId: userId,
				FormType: 1,
			});
		});

		postAnswer(data);
	};

	const currentQuestions = () => {
		const start = (current - 1) * delimiter;
		const end = start + delimiter;

		return contents.slice(start, end).map((content, index) => {
			return (
				<FlexBoxSBwithBorder>
					<ContentContainer key={content.id}>
						{content.id}. {content.title}
					</ContentContainer>
					<AnswerBtn
						onClick={onCheckHandler}
						index={content.id}
						clicked={checked[content.id]}
					/>
				</FlexBoxSBwithBorder>
			);
		});
	};

	return (
		<Container height="inherit" display="flex" flexDirection="column" gap="30">
			<Container display="flex" justifyContent="space-between">
				<Title>개인 성향 관련 검사</Title>
				<TimerContainer
					time={time}
					setTime={setTime}
					formType={0}
					onComplete={onHandleComplete}
				/>
			</Container>
			<SelectionExam border={true} />
			<ContentsWrapper>{currentQuestions()}</ContentsWrapper>
			<Container display="flex" flexDirection="column" gap="10">
				<FlexContainer>
					<Container>
						<PrevButton content="이전" onClick={onPrevHandler} />
					</Container>
					<Container alignSelf="end">
						<MainButton content="다음" flag={true} onClick={onNextHandler} />
					</Container>
				</FlexContainer>
				<Container alignSelf="end">
					<Contents color="#888888">
						모든 문항에 응답하셔야 다음 페이지로 넘어갈 수 있으며 시간 종료시
						설문은 종료됩니다.
					</Contents>
				</Container>
			</Container>
		</Container>
	);
};

export default Personal;

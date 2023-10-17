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
import { question } from "../../static/example";
import PrevButton from "../../components/PrevButton";

const Personal = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [time, setTime] = useState(localStorage.getItem("timeLeft") || 2);
	const [checked, setChecked] = useState({});
	const [current, setCurrent] = useState(1);

	const contents = question;
	const delimiter = 10;

	useEffect(() => {
		if (location.state === null) {
			navigate("/");
		}

		const initialChecked = Object.fromEntries(
			Array.from({ length: contents["questions"].length }, (_, i) => [i, -1])
		);
		setChecked(initialChecked);
	}, []);

	const onCheckHandler = (e) => {
		e.preventDefault();

		if (checked[e.target.parentElement.id] === Number(e.target.id)) {
			setChecked({ ...checked, [e.target.parentElement.id]: -1 });
		} else
			setChecked({
				...checked,
				[e.target.parentElement.id]: Number(e.target.id),
			});
	};

    const onPrevHandler = (e) => {
        if(current === 1){
            alert("이전 문항이 존재하지 않습니다.");
        }
        else{
            setCurrent(current - 1);
        }
    }

	const onNextHandler = (e) => {
        const start = (current - 1) * delimiter;
		const end = start + delimiter;
        
        // if(Object.values(checked).slice(start, end).some(item => item === -1)){
        //     alert("모든 문항에 답해주세요.");
        // }
		// else 
        if (contents["questions"].length < delimiter * current) {
			navigate(`/survey/1`, { state: { flag: true, index: 1 } });
            //TODO: 데이터 보내기
		} else{
			setCurrent(current + 1);
		}
	};

	const currentQuestions = () => {
		const start = (current - 1) * delimiter;
		const end = start + delimiter;

		return contents["questions"].slice(start, end).map((content, index) => {
			return (
				<FlexBoxSBwithBorder>
					<ContentContainer key={start + index}>
						{start + index + 1}. {content}
					</ContentContainer>
					<AnswerBtn
						onClick={onCheckHandler}
						index={start+index}
						clicked={checked[start + index]}
					/>
				</FlexBoxSBwithBorder>
			);
		});
	};

	return (
		<Container height="inherit" display="flex" flexDirection="column" gap="30">
			<Container display="flex" justifyContent="space-between">
				<Title>개인 성향 관련 검사</Title>
				<TimerContainer time={time} setTime={setTime} />
			</Container>
			<SelectionExam border={true} />
			<ContentsWrapper>{currentQuestions()}</ContentsWrapper>
			<FlexContainer>
                <Container>
                    <PrevButton content="이전" onClick={onPrevHandler}/>
                </Container>
				<Container>
					<MainButton
						content="다음"
						flag={true}
						onClick={(e) => onNextHandler(2, e)}
					/>
				</Container>
			</FlexContainer>
		</Container>
	);
};

export default Personal;

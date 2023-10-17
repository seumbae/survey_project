import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import TimerContainer from "../common/TimerContainer";
import SelectionExam from "../../components/SelectionExam";
import { Content, ContentContainer, ContentsWrapper, FlexBoxSBwithBorder } from "../../components/Common";
import AnswerBtn from "../../components/AnswerBtn";
import MainButton from "../../components/MainButton";

const SampleMain = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [time, setTime] = useState(localStorage.getItem('timeLeft') || 2);
    const contents = ["나는 정서적으로 안정되어 있다."]
    const [checked, setChecked] = useState({})

	useEffect(() => {
		if (location.state === null || location.state.flag === false) {
            // navigate("/");
		}

        //1.문항 받아오고
        //2.문항 저장하고
        //TODO: length 변경해야함
        const initialChecked = Object.fromEntries(Array.from({ length: 1 }, (_, i) => [i, -1]));
        setChecked(initialChecked);
	}, []);

    const onCheckHandler = (e) => {
        e.preventDefault();
        
        if(checked[e.target.parentElement.id] === Number(e.target.id)){
            setChecked({...checked, [e.target.parentElement.id]: null});
        }
        else 
            setChecked({...checked, [e.target.parentElement.id]: Number(e.target.id)});
    }

    const onClickHandler = (index, e) => {
        if(Object.values(checked).every(item => item !== -1)){
            alert("설문을 시작합니다.");
            navigate(`/survey/0`, { state: { flag: true, index: 0, formType: 0 } });
        }
        else{
            alert("예시 문항에 답해주세요.")
        }
    }

    return (
        <Container height="inherit" display="flex" flexDirection="column" gap="30" >
            <Container display="flex" justifyContent="space-between">
                <Title>예시문제</Title>
                <TimerContainer time={time} setTime={setTime}/>
            </Container>
            <SelectionExam border={true}/>
            <ContentsWrapper>
                {contents.map((content, index) => {
                    return (
                        <FlexBoxSBwithBorder>
                            <ContentContainer key={index}>
                                {index+1}. {content}
                            </ContentContainer>
                            <AnswerBtn onClick={onCheckHandler} index={index} clicked={checked[index]}/>
                        </FlexBoxSBwithBorder>
                    )
                    })}        
            </ContentsWrapper>
            <Content marginTop="90px">다음 창으로 넘어가시면 실제 인성검사가 실행됩니다.</Content>
            <Container alignSelf="end">
				<MainButton
					content="다음"
					flag={true}
					onClick={(e) => onClickHandler(2, e)}
				/>
			</Container>
        </Container>
    )
}

export default SampleMain;


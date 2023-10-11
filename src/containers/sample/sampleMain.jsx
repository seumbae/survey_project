import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/Title";
import TimerContainer from "../common/TimerContainer";
import SelectionExam from "../../components/SelectionExam";
import ExamContent from "../../components/samplePage/ExamContent";
import { ContentContainer, ContentsWrapper, FlexBoxSBwithBorder } from "../../components/Common";

const SampleMain = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [time, setTime] = useState(localStorage.getItem('timeLeft') || 2);
    
    const contents = ["나는 정서적으로 안정되어 있다.", "별로다완전"]
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
            <SelectionExam />
            <ContentsWrapper>
                {contents.map((content, index) => {
                    return (
                        <FlexBoxSBwithBorder>
                            <ContentContainer key={index}>
                                {index+1}. {content}
                            </ContentContainer>
                            <SelectionExam />
                        </FlexBoxSBwithBorder>
                    )
                    })}        
            </ContentsWrapper>
            {/* <ExamContent /> */}
        </Container>
    )
}

export default SampleMain;
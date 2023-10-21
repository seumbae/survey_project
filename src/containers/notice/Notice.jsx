import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Contents from "../../components/Contents";
import Participation from "./Participation";
import MainButton from "../../components/MainButton";
import PersonalInfo from "./PersonalInfo";
import Start from "./Start";
import Title from "../../components/Title";

const Main = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.state === null || 3 < location.state.idx) {
			navigate("/");
		}
	}, []);

	const onClickHandler = (index, e) => {
		e.preventDefault();
		navigate(`/notice/${index}`, { state: { idx: index } });
	};

	if (location.state) {
		if (location.state.idx === 0) {
			return (
				<Container
					display="flex"
					flexDirection="column"
					justifyContent="unset"
					alignItems="flex-start"
					gap="40"
				>
					<Title>안녕하세요?</Title>
					<Contents>
						먼저 응답에 귀한 시간 내주셔서 대단히 감사합니다.
						<br />
						저는 중앙대학교 융합보안학과 박사과정에 재학중인 학생이며,
						<br />본 응답은 인성검사를 기반한 보안성향 연구를 위해
						작성되었습니다.
					</Contents>
					<Contents>
						귀하의 답변은 연구목적 이외의 다른 용도로 결코 사용되지 않을 것을
						약속드리니,
						<br />각 문항에 대한 솔직한 답변 부탁드립니다.
					</Contents>
					<Contents color="#202020" bold={true}>
						[연구자 인적사항]
						<br />
						이름: 정세희
						<br />
						이메일 주소: tnvmffp96@gmail.com
					</Contents>
					<Container alignSelf="end">
						<MainButton
							content="다음"
							flag={true}
							onClick={(e) => onClickHandler(1, e)}
						/>
					</Container>
				</Container>
			);
		} else if (location.state.idx === 1) {
			return <Participation />;
		} else if (location.state.idx === 2) {
			return <PersonalInfo />;
		} else if (location.state.idx === 3) {
			return <Start />;
		}
	}
};

export default Main;

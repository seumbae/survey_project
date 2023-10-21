import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
import Container from "../components/Container";

const Main = () => {
	const navigate = useNavigate();

	const onClickHandler = (e) => {
		e.preventDefault();
		navigate("/notice/0", { state: { idx: 0 } });
	};

	return (
		<Container
			display="flex"
			height="100vh"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			gap="20"
		>
			<h1>인성검사 기반 보안 성향 테스트</h1>
			<MainButton
				content="설문 시작하기"
				flag={false}
				onClick={onClickHandler}
			/>
		</Container>
	);
};

export default Main;

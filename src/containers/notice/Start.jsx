import { useNavigate } from "react-router-dom";
import Contents from "../../components/Contents";
import MainButton from "../../components/MainButton";
import ButtonContainer from "../../components/ButtonContainer";
import ContentContainer from "../../components/ContentContainer";
import RelativeContainer from "../../components/RelativeContainer";

const Start = () => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate("/sample", { state: { flag: true } });
	};

	return (
		<RelativeContainer>
			<ContentContainer>
				<Contents fontSize="2rem" color="red">
					지금부터 개인 성향 관련 검사를 실시합니다.
					<br />
					다음 창으로 넘어가시면 예시 문제가 실행됩니다.
				</Contents>
			</ContentContainer>
			<ButtonContainer>
				<MainButton content="다음" flag={true} onClick={onClickHandler} />
			</ButtonContainer>
		</RelativeContainer>
	);
};

export default Start;

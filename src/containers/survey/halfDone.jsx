import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RelativeContainer from "../../components/RelativeContainer";
import Contents from "../../components/Contents";
import ButtonContainer from "../../components/ButtonContainer";
import MainButton from "../../components/MainButton";
import ContentContainer from "../../components/ContentContainer";

const Half = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.state === null) {
			navigate("/");
		}
	}, []);

	const onClickHandler = () => {
		navigate("/survey/0", { state: { flag: true, index: 0, formType: 1 } });
	};

	return (
		<RelativeContainer>
			<ContentContainer>
				<Contents>
					개인 성향 관련 검사를 완료하셨습니다.
					<br />
					다음 창으로 넘어가시면 보안 행동에 관한 검사가 시작됩니다.
					<br />
					총 63문항을 10분 30초 동안 풀어주시면 됩니다.
					<br />
					응답 방식은 앞선 검사와 동일합니다.
				</Contents>
			</ContentContainer>
			<ButtonContainer>
				<MainButton content="다음" flag={true} onClick={onClickHandler} />
			</ButtonContainer>
		</RelativeContainer>
	);
};

export default Half;

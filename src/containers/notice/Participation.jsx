import Contents from "../../components/Contents";
import Container from "../../components/Container";
import MainButton from "../../components/MainButton";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BorderBox from "../../components/BorderBox";
import Title from "../../components/Title";

const Participation = () => {
	const navigate = useNavigate();

	const [checked, setChecked] = useState(false);
	const [isAgree, setIsAgree] = useState(false);
	const [isNonAgree, setIsNonAgree] = useState(false);

	const handleAgreeChange = (e) => {
		setIsAgree(e.target.checked);
		if (e.target.checked) {
			setChecked(true);
			setIsNonAgree(false);
		} else {
			setChecked(false);
		}
	};
	const handleNonAgreeChange = (e) => {
		setIsNonAgree(e.target.checked);
		if (e.target.checked) {
			setChecked(true);
			setIsAgree(false);
		} else {
			setChecked(false);
		}
	};

	const onClickHandler = (index, e) => {
		e.preventDefault();
		if (checked === false) {
			alert("동의 여부를 체크해주세요.");
		} else if (isNonAgree === true) {
			alert("설문을 종료합니다.");
			navigate("/");
		} else {
			navigate(`/notice/${index}`, { state: { idx: index } });
		}
	};

	return (
		<Container
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			gap="40"
		>
			<BorderBox>
				<Title>연구 참여 방법</Title>
				<Contents fontSize="1.5rem">
					만일 귀하가 참여의사를 밝혀 주시면 다음과 같은 기능이 진행될 것입니다.
					<br />
					<Contents fontSize="2rem" color="red">
						인적사항 기재 후 예비 문항을 푸신 후 실제 연구에 사용될 개인 성향
						관련 검사,
						<br />
						{/* TODO: 문항 수 , 00분*/}
						보안 행동 검사 총 2세트의 000문항을 00분의 시간제한 안에서 풀게 됩니다.
					</Contents>
					<br />
					답변의 경우 Likert 5점 척도를 활용하여 [전혀 그렇지 않다 | 그렇지 않다 | 보통이다 | 그렇다 | 매우 그렇다]로 선택하실 수 있습니다.
					<br />
					스마트폰보다는 컴퓨터 사용을 권장드리며 총 소요시간은 20분 정도로 예상됩니다.
				</Contents>
			</BorderBox>

			<Container
				display="flex"
				flexDirection="column"
				alignItems="center"
				alignSelf="center"
			>
				<Contents fontSize="2rem">
					귀하께서는 연구 방법을 숙지하였으며 연구에 참여할 것을
					동의하시겠습니까?
				</Contents>
				<Contents>
					동의함에 체크하시면 연구의 방법이 귀하에게 설명되었음을 뜻하며 또한
					귀하가 연구에 참여할 것에 동의하셨음을 의미합니다.
				</Contents>
			</Container>

			<Container display="flex" flexDirection="row" alignSelf="center" gap="20">
				<Checkbox value="true" checked={isAgree} onChange={handleAgreeChange}>
					동의함
				</Checkbox>
				<Checkbox
					value="false"
					checked={isNonAgree}
					onChange={handleNonAgreeChange}
				>
					동의하지 않음
				</Checkbox>
			</Container>

			<Container alignSelf="end">
				<MainButton
					content="다음"
					flag={true}
					onClick={(e) => onClickHandler(2, e)}
				/>
			</Container>
		</Container>
	);
};

export default Participation;

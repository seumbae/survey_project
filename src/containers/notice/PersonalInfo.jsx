import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import Container from "../../components/Container";
import Contents from "../../components/Contents";
import Email from "../../components/Email";
import MainButton from "../../components/MainButton";
import Table from "../../components/Table";
import Title from "../../components/Title";
import { postPersonalInfo } from "../../services/sevice";

const PersonalInfo = () => {
	const navigate = useNavigate();

	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [job, setJob] = useState("");
	const [email, setEmail] = useState("");
	const [checked, setChecked] = useState("");
	const handleSexChange = (e) => {
		setSex(e.target.checked ? e.target.value : "");
	};

	const handleAgeChange = (e) => {
		setAge(e.target.checked ? e.target.value : "");
	};

	const handleJobChange = (e) => {
		setJob(e.target.checked ? e.target.value : "");
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleCheckedChange = (e) => {
		setChecked(e.target.checked ? e.target.value : "");
	};

	const onClickHandler = (index, e) => {
		const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
		if (checked === "") alert("동의 여부를 체크해주세요.");
		else if (checked === "0") {
			alert("설문을 종료합니다.");
			navigate("/");
		} else {
			if (sex === "") alert("성별을 체크해주세요.");
			else if (age === "") alert("나이를 체크해주세요.");
			else if (job === "") alert("업종을 체크해주세요.");
			else if (email === "" || !regEmail.test(email)) alert("이메일 주소를 확인해주세요.");
			else {
				e.preventDefault();

				const data = {
					Age: age,
					Job: job,
					EmailAddress: email,
					SurveyAgree: 1,
					IndAgree: checked,
					Sex: sex,
				};

				postPersonalInfo(data)
					.then((res) => {
						if (res.status === 200) {
							localStorage.setItem("userId", res.data.id);
							navigate(`/notice/${index}`, {
								state: { flag: true, idx: index },
							});
						} else {
							throw new Error(
								"서버의 오류가 발생했습니다. 관리자에게 문의하십시오."
							);
						}
					})
					.catch((err) => {
						alert("현재 서버의 오류가 발생했습니다. 관리자에게 문의하십시오.");
						navigate("/");
					});
			}
		}
	};

	return (
		<Container
			display="flex"
			flexDirection="column"
			alignItems="flex-start"
			gap="40"
		>
			<Title>인적사항</Title>
			<Container
				width="100%"
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
				gap="16"
			>
				<Container display="flex" flexDirection="row" alignItems="center">
					<Contents width="20%">
						성별
					</Contents>
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="16"
						flexWrap="wrap"
					>
						<Checkbox
							value="male"
							checked={sex === "male"}
							onChange={handleSexChange}
						>
							남성
						</Checkbox>
						<Checkbox
							value="female"
							checked={sex === "female"}
							onChange={handleSexChange}
						>
							여성
						</Checkbox>
					</Container>
				</Container>
				<Container display="flex" flexDirection="row" alignItems="center">
					<Contents width="20%">
						나이
					</Contents>
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="16"
						flexWrap="wrap"
					>
						<Checkbox
							value="20"
							checked={age === "20"}
							onChange={handleAgeChange}
						>
							20대
						</Checkbox>
						<Checkbox
							value="30"
							checked={age === "30"}
							onChange={handleAgeChange}
						>
							30대
						</Checkbox>
						<Checkbox
							value="40"
							checked={age === "40"}
							onChange={handleAgeChange}
						>
							40대
						</Checkbox>
						<Checkbox
							value="50"
							checked={age === "50"}
							onChange={handleAgeChange}
						>
							50대 이상
						</Checkbox>
					</Container>
				</Container>
				<Container display="flex" flexDirection="row" alignItems="center">
					<Contents width="20%">
						직업
					</Contents>
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="16"
						flexWrap="wrap"
					>
						<Checkbox
							value="학생"
							checked={job === "학생"}
							onChange={handleJobChange}
						>
							학생
						</Checkbox>
						<Checkbox
							value="직장인"
							checked={job === "직장인"}
							onChange={handleJobChange}
						>
							직장인
						</Checkbox>
						<Checkbox
							value="무직"
							checked={job === "무직"}
							onChange={handleJobChange}
						>
							무직
						</Checkbox>
						<Checkbox
							value="프리랜서"
							checked={job === "프리랜서"}
							onChange={handleJobChange}
						>
							프리랜서
						</Checkbox>
						<Checkbox
							value="자영업자"
							checked={job === "자영업자"}
							onChange={handleJobChange}
						>
							자영업자
						</Checkbox>
						<Checkbox
							value="기타"
							checked={job === "기타"}
							onChange={handleJobChange}
						>
							기타
						</Checkbox>
					</Container>
				</Container>
				<Container
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					alignItems="center"
				>
					<Contents width="20%">이메일 주소</Contents>
					<Email onChange={handleEmailChange} />
				</Container>
			</Container>
			<Container display="flex" flexDirection="column" width="100%" gap="20">
				<Table chcked={checked} onChange={handleCheckedChange} />
				<Container
					display="flex"
					flexDirection="row"
					width="inherit"
					gap="20"
					justifyContent="center"
					flexWrap="wrap"
				>
					<Checkbox
						value="1"
						checked={checked === "1"}
						onChange={handleCheckedChange}
						bold={true}
					>
						개인정보 수집 및 이용에 동의함
					</Checkbox>
					<Checkbox
						value="0"
						checked={checked === "0"}
						onChange={handleCheckedChange}
						bold={true}
					>
						개인정보 수집 및 이용에 동의하지 않음
					</Checkbox>
				</Container>
			</Container>
			<Container display="flex" flexDirection="column" width="100%">
				<Container alignSelf="end">
					<MainButton
						content="다음"
						flag={true}
						onClick={(e) => onClickHandler(3, e)}
					/>
				</Container>
				<Container alignSelf="end">
					<Contents color="#888888">
						작성 후 다음을 눌러주시면 인성검사 예시문제가 진행됩니다.
					</Contents>
				</Container>
			</Container>
		</Container>
	);
};

export default PersonalInfo;

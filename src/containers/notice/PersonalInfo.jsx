import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import Container from "../../components/Container";
import Contents from "../../components/Contents";
import Email from "../../components/Email";
import MainButton from "../../components/MainButton";
import Table from "../../components/Table";
import Title from "../../components/Title";

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
		if (checked === "") alert("동의 여부를 체크해주세요.");
		else if (checked === "0") {
			alert("설문을 종료합니다.");
			navigate("/");
		} else {
			if (sex === "") alert("성별을 체크해주세요.");
			else if (age === "") alert("나이를 체크해주세요.");
			else if (job === "") alert("업종을 체크해주세요.");
			else if (email === "") alert("이메일 주소를 입력해주세요.");
			else {
				e.preventDefault();
				// TODO: 데이터 보내기, userId저장하기
				navigate(`/notice/${index}`, { state: { idx: index } });
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
				flexDirection="row"
				justifyContent="flex-start"
			>
				<Container
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					width="20%"
					gap="20"
				>
					<Contents>성별</Contents>
					<Contents>나이</Contents>
					<Contents>업종</Contents>
					<Contents>이메일 주소</Contents>
				</Container>
				<Container display="flex" flexDirection="column" gap="20">
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="20"
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
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="20"
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
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="20"
					>
						<Checkbox
							value="경영사무"
							checked={job === "경영사무"}
							onChange={handleJobChange}
						>
							경영사무
						</Checkbox>
						<Checkbox
							value="IT/보안"
							checked={job === "IT/보안"}
							onChange={handleJobChange}
						>
							IT/보안
						</Checkbox>
						<Checkbox
							value="마케팅"
							checked={job === "마케팅"}
							onChange={handleJobChange}
						>
							마케팅
						</Checkbox>
						<Checkbox
							value="영업"
							checked={job === "영업"}
							onChange={handleJobChange}
						>
							영업
						</Checkbox>
						<Checkbox
							value="연구"
							checked={job === "연구"}
							onChange={handleJobChange}
						>
							연구
						</Checkbox>
						<Checkbox
							value="기타"
							checked={job === "기타"}
							onChange={handleJobChange}
						>
							기타
						</Checkbox>
					</Container>
					<Container
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						gap="20"
					>
						<Email onChange={handleEmailChange} />
					</Container>
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
				>
					<Checkbox
						value="1"
						checked={checked === "1"}
						onChange={handleCheckedChange}
					>
						개인정보 수집 및 이용에 동의함
					</Checkbox>
					<Checkbox
						value="0"
						checked={checked === "0"}
						onChange={handleCheckedChange}
					>
						개인정보 수집 및 이용에 동의하지 않음
					</Checkbox>
				</Container>
			</Container>
			<Container alignSelf="end">
					<MainButton
						content="다음"
						flag={true}
						onClick={(e) => onClickHandler(3, e)}
					/>
				</Container>
		</Container>
	);
};

export default PersonalInfo;

import { useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import Contents from "../components/Contents";
import RelativeContainer from "../components/RelativeContainer";
import { useNavigate } from "react-router-dom";

const Done = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(navigate.state === null){
            navigate("/");
        }
    })

	return (
		<RelativeContainer>
			<ContentContainer>
				<Contents fontSize="2rem">
					응답이 완료되었습니다.
					<br />
					참여해주셔서 감사합니다.
					<br />
					창을 종료하셔도 좋습니다.
				</Contents>
			</ContentContainer>
		</RelativeContainer>
	);
};

export default Done;

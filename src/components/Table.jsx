import styled from "styled-components";

const Table = () => {
    return (
        <Root>
            <Contents textAlign="center" bold={true}>개인정보 수집 및 이용에 대한 동의(개인정보 보호법 제15조)</Contents>
            <Row>
                <Contents width="30%">개인정보 수집항목</Contents>
                <Contents>이메일 주소</Contents>
            </Row>
            <Row>
                <Contents width="30%">수집 및 이용목적</Contents>
                <Contents>인성검사 관련 연구</Contents>
            </Row>
            <Row>
                <Contents width="30%">보유 및 이용기간</Contents>
                <Contents>수집일로부터 6개월</Contents>
            </Row>
            <Contents>
            귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 원활한 실험에 일부 제한이 될 수 있습니다.
            </Contents>
        </Root>
    )
}

export default Table;

const Root = styled.div`
    border: 1px solid #000000;
    width: 80%;
    align-self: center;
`

const Contents = styled.div`
    font-weight: ${(props) => (props.bold ? "bold" : "")};
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding: 10px;
    width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
    text-align: ${(props) => (props.textAlign ? props.textAlign : "unset")}};
`

const Row = styled.div`
    display: flex;
`
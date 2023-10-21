import styled from "styled-components";

const Email = ({ onChange }) => {
	return (
        <Input onChange={onChange} />
	);
};

export default Email;

const Input = styled.input.attrs({type: 'email', placeholder:"abc@gmail.com", size:"40"})`
    height: 1.3rem;
    padding: 0.3rem;
    border: 1px solid #888888;
`
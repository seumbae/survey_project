import styled from "styled-components";

const Checkbox = ({children, onChange, value, checked}) => {
    return (
        <Label>
            {children}
            <Input value={value} type="checkbox" onChange={onChange} checked={checked}/>
        </Label>
    )
}

export default Checkbox;

const Input = styled.input`
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid #000000;
    cursor: pointer;

    &:checked {
        background-color: #000000;
    }
`

const Label = styled.label`
    display: flex;
    align-items: center;
`
import styled from "styled-components";

const Checkbox = ({children, onChange, value, checked, bold}) => {
    return (
        <Label bold={bold}>
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
    font-weight: ${props => props.bold ? "bold" : ""};

    @media (min-width: 1024px){
        font-size:1.3rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.5rem;
    }

    @media (max-width: 767px) {
        font-size: 1rem;
    }
`
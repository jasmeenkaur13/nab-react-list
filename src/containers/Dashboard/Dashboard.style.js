import styled from 'styled-components';
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

export const StyledUnorderedList = styled.ul`
list-style-type: none;
`;

export const StyledListContainer = styled.div`
display:flex;
`;

export const StyledListContainerHeading = styled.div`
display:flex;
margin-left:2rem;
font-weight: bold;
margin-top:3rem;
`;

export const StyledImage = styled.img`
height: 3rem;
width: 7rem;
`;

export const StyledNavigationLink = styled(Nav.Link)`
color:gray;
&:hover,
&:focus{
  color:gray;
}

`;

export const StyledLabel = styled(Form.Label)`
padding-top: .5rem;
line-height: normal;
width:10rem;
height:3rem;
border-style:solid;
text-align:center;
font-size: 15px;
border-right: ${props => props.isLast === 'true' ? 'solid' : 'none'}
`;

export const StyledCheckBox = styled(Form.Check)`
width:10rem;
font-size: 15px;
height:3rem;
border-style:solid;
padding-left: 2.5rem;
padding-top: .5rem;
.form-check-input{
  border: 1px solid lightgray;
}
.form-check-input:checked {
  background-color: gray;
  border-color: gray;
}
.form-check-input:focus,
.form-check-input:focus-visible {
  box-shadow: none;
}
`;

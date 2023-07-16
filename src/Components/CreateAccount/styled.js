import { styled } from "styled-components";

export const ContainerSignin = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledTitulo = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  margin-top: 30px;
  justify-self: center;
  margin-left: 10px;
`;

export const StyledForm = styled.form`
    margin-top: 145px;
    height: 45%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;
    margin-left: 5px;
`

export const StyledInput = styled.input`
   width: 350px;
   height: 50px;
   top: 403px;
   left: 33px;
   color:gray;
   left: 26px;

`

export const StyledP = styled.p`
   font-family: 'Noto Sans';
   font-size: 14px;
   font-weight: 300;
   line-height: 21px;
   letter-spacing: 0em;
   text-align: center;

`

export const ButtonCadastrar = styled.button`
  margin-top: 60px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
  width: 365px;
  border-radius: 40px;
  border-color: white;
  height: 50px;
  color: white;
`;
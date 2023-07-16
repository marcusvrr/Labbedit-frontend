import { styled } from "styled-components";

export const DivPageLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContainerLoguin = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const ContainerTitulos = styled.div`
  margin-bottom: 30px;
`;

export const StyledTitulo = styled.h1`
   font-family: 'Inter', sans-serif;
   line-height: 21px;;
   text-align: center;
   margin-bottom: -10px;
`
export const StyledP = styled.p`
   font-family: 'Inter', sans-serif;
   color: gray;
   font-size: 14px;
   font-weight: 300;
   line-height: 21px;
   letter-spacing: 0em;
   text-align: center;
   margin-bottom: 75px;

`

export const StyledForm = styled.form`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;
`

export const StyledInput = styled.input`
   width: 350px;
   height: 50px;
   top: 403px;
   left: 33px;
   color:gray;

`

export const Buttonlogin = styled.button`
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

export const StyledHr = styled.hr`
  margin-top: 20px;
  width: 88vw;
  height: 1px;
  border: none;
  background-image: linear-gradient(90deg, rgba(255, 100, 137, 1) 0%, rgba(249, 178, 78, 1) 100%);
`;

export const ButtonCadastro = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  margin-top: 20px;
  width: 365px;
  border-radius: 30px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #FE7E02;
  color: #FE7E02;
`;
import styled from "styled-components";


export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Adicionamos 'auto' para que o último item ocupe o espaço restante */
  background-color: #ededed;
  align-items: center;
  padding: 10px;
  width: 100vw;
  height: 30px;
  margin-top: 40px;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    height: auto;
    justify-self: center;
    width: 28.023000717163086px;
    height: 28.63924789428711px;
    top: 54.913787841796875px;
    left: 45vw;
    margin-right: 30px;
    margin-bottom: 10px;
  }

  button {
    background-color: #f0f0f0;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    justify-self: end;
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    margin-right: 30px;
    color: #4088CB;
    font-family: Noto Sans;
  }
`;
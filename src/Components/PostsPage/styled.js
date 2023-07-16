import { styled } from "styled-components";

export const ContainerPosts = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const PostingDiv = styled.div`
  display: grid;
  grid-row: 2/3;
  justify-content: center;
  align-items: left;
  width: 364;
  gap: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const TextArea = styled.input`
  border-radius: 10px;
  background-color: #ededed;
  border: none;
  height: 95px;
  width: 320px;
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: -4px;
  justify-self: center;
  padding: 10px;
  position: relative;
  &::placeholder {
    position: absolute;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    top: 15px;
    left: 12px;
    font-size: 14px;
    color: gray;
  }
`;
export const ButtonPosts = styled.button`
  background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  width: 344px;
  border-radius: 12px;
  border-color: white;
  height: 50px;
  color: white;
  justify-self: center;
  margin-left: -5;
`;

export const StyledHr = styled.hr`
  margin-top: 20px;
  width: 88vw;
  height: 1px;
  border: none;
  background-image: linear-gradient(90deg, rgba(255, 100, 137, 1) 0%, rgba(249, 178, 78, 1) 100%);
`;

export const DivListPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  width: 364px;
  gap: 20px;
`;

export const LayoutCard = styled.div`
  width: 350px;
  font-family: 'Inter', sans-serif;
  background: #FBFBFB;
  border-radius: 12px;
  border: 1px solid #E0E0E0;
  padding: 9px, 10px, 9px, 10px;
`;

export const StyledUserP = styled.p`
   font-family: 'Inter', sans-serif;
   color: gray;
   font-size: 12px;
   font-weight: 400;
   line-height: 15.6px;
   letter-spacing: 0em;
   text-align: left;
   margin-bottom: 10px;
   margin-left: 7px;
`;

export const StyledContentP = styled.p`
   font-family: 'Inter', sans-serif;
   color: black;
   font-size: 18px;
   font-weight: 400;
   line-height: 23.4px;
   letter-spacing: 0em;
   text-align: left;
   margin-bottom: 10px;
   margin-left: 7px;
   width: 335px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
  width: 364px;
  gap: 20px;
  margin-left: 5px;
  margin-bottom: 7px;
`;

export const ContainerLikes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 27.8px;
  border: 1px solid #ECECEC;
  border-radius: 28px;
`;

export const StyledIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 5px;
`;

export const StyledLikeP = styled.p`
   font-family: 'Inter', sans-serif;
   color: black;
   font-size: 11px;
   font-weight: 700;
   line-height: 12.43px;
   letter-spacing: 0em;
   text-align: center;
   margin-bottom: 10px;
   width: 335px;
`;

export const ContainerComent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 65.4px;
  height: 27.8px;
  gap: 8px;
  border: 1px solid #ECECEC;
  border-radius: 28px;
`;

export const StyledComentP = styled.p`
   font-family: 'Inter', sans-serif;
   color: #6F6F6F;
   font-size: 10px;
   font-weight: 700;
   line-height: 12.43px;
   letter-spacing: 0em;
   text-align: center;
   margin-bottom: 10px;
   width: 335px;
`;
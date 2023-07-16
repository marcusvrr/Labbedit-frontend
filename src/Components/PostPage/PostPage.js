import Header from "../Header/Header";
import like from "../../Assets/like.png";
import dislike from "../../Assets/dislike.png";
import balao from "../../Assets/balao.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useForm from "../../Hook/useForm";
import { ButtonPosts, ContainerComent, ContainerIcons, ContainerLikes, ContainerPost, LayoutCard, StyledComentP, StyledContentP, StyledForm, StyledHr, StyledIcon, StyledLikeP, StyledUserP, TextArea } from "./styled";
import { PostingDiv } from "../PostsPage/styled";
import { BASE_URL } from "../../constants/BASE_URL";

const PostPage = () => {
  const [comentario, setComentario] = useState([]);
  const { form, onChange, handleSubmit } = useForm({ content: "" });
  const params = useParams();

  useEffect(() => {
    const pegarPosts = () => {
      axios
        .get(`${BASE_URL}/posts`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          const post = response.data.find((publi) => publi.id === params.id);
          setComentario(post);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    pegarPosts();
  }, [params.id]);

  const comentarios = [
    {
      id: "Rodrigo",
      content: "Bora codar!!!",
      likes: 5,
    },
    {
      id: "Celio",
      content: "Me chama, to chegando :D~",
      likes: 30,
    },
    {
      id: "Chay",
      content: "<3",
      likes: 2,
    },
  ];

  return (
    <ContainerPost>
      <Header />
      <PostingDiv>
        <LayoutCard>
          <StyledUserP>Enviado por: {comentario?.creator?.name}</StyledUserP>
          <StyledContentP>{comentario?.content}</StyledContentP>
          {comentario && (
            <ContainerIcons>
              <ContainerLikes>
                <StyledIcon src={like} alt={"setinha pra cima"} />
                <StyledLikeP>
                  {comentario.likes || 0} - {comentario.dislikes || 0}
                </StyledLikeP>
                <StyledIcon src={dislike} alt={"setinha pra baixo"} />
              </ContainerLikes>
              <ContainerComent>
                <StyledIcon src={balao} alt={"icone de comentarios"} />
                <StyledComentP>3</StyledComentP>
              </ContainerComent>
            </ContainerIcons>
          )}
        </LayoutCard>
        <StyledForm onSubmit={handleSubmit}>
          <TextArea
            name="coment"
            value={form.coment}
            onChange={onChange}
            type="text"
            placeholder="Adicionar comentário"
          />
          <ButtonPosts>Responder</ButtonPosts>
        </StyledForm>
      </PostingDiv>
      <StyledHr />
      {comentarios.map((coment) => (
        <LayoutCard key={coment.id}>
          <StyledUserP>Enviado por: {coment.id}</StyledUserP>
          <StyledContentP>{coment.content}</StyledContentP>
          <ContainerLikes>
            <StyledIcon src={like} alt={"setinha pra cima"} />
            <StyledLikeP>{coment.likes}</StyledLikeP>
            <StyledIcon src={dislike} alt={"setinha pra baixo"} />
          </ContainerLikes>
        </LayoutCard>
      ))}
    </ContainerPost>
  );
};

export default PostPage;

import axios from "axios"
import { useEffect, useState } from "react"
import like from "../../Assets/like.png"
import dislike from "../../Assets/dislike.png"
import balao from "../../Assets/balao.png"
import useForm from "../../Hook/useForm"
import Header from "../Header/Header"
import { goToPost } from "../../Routes/coordinator"
import { useNavigate } from "react-router-dom"
import { ButtonPosts, ContainerPosts, PostingDiv, TextArea, StyledHr, DivListPosts, LayoutCard, StyledForm, StyledUserP, StyledContentP, StyledIcon, ContainerIcons, ContainerLikes, StyledLikeP, ContainerComent, StyledComentP } from "./styled"
import { BASE_URL } from "../../constants/BASE_URL"

const PostPage = () => {
    const [postList, setPostList] = useState([])
    const [post, setPost] = useState(0)
    const { form, onChange } = useForm({ content: "" });
    const navigate = useNavigate();
    const pegarPosts = () => {
        axios.get(`${BASE_URL}/posts`, { headers: { Authorization: localStorage.getItem("token") } })
            .then((response) => { setPostList(response.data) })
            .catch((error) => { console.log(error); })
    }
    const criarPosts = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/posts`, form, { headers: { Authorization: localStorage.getItem("token") } })
            .then((response) => { setPost(post + 1) })
            .catch((error) => { console.log(error); })
    }
    // const comentar = (navigate, id, post) => {

    // }
    useEffect(() => { pegarPosts() }, [post])

    return (
        <ContainerPosts>
            <Header />
            <PostingDiv >
                <StyledForm onSubmit={criarPosts}>
                    <TextArea
                        name="content"
                        value={form.content}
                        onChange={onChange}
                        type="text"
                        placeholder="Escreva seu post..."
                    />


                    <ButtonPosts>Postar</ButtonPosts>
                </StyledForm>

            </PostingDiv>

            <StyledHr />
            <DivListPosts >
                {postList
                    .sort((atual, proximo) => {
                        if (atual.likes < proximo.likes) {
                            return 1;
                        } else if (atual.likes > proximo.likes) {
                            return -1;
                        } else {
                            return postList;
                        }
                    })
                    .map((publicacao) => {
                        return <LayoutCard key={publicacao.id}>
                            <StyledUserP>Enviado por: {publicacao.creator.name}</StyledUserP>
                            <StyledContentP>{publicacao.content}</StyledContentP>
                            <ContainerIcons>
                                <ContainerLikes>
                                    <StyledIcon src={like} alt={"setinha pra cima"} />
                                    <StyledLikeP>{publicacao.likes - publicacao.dislikes}</StyledLikeP>
                                    <StyledIcon src={dislike} alt={"setinha pra baixo"} />
                                </ContainerLikes>
                                <ContainerComent onClick={() => goToPost(navigate, publicacao.id)}>
                                    <StyledIcon src={balao} alt={"icone de comentarios"} />
                                    <StyledComentP>3</StyledComentP>
                                </ContainerComent>
                            </ContainerIcons>


                        </LayoutCard>
                    })}
            </DivListPosts>
        </ContainerPosts>
    )

}
export default PostPage
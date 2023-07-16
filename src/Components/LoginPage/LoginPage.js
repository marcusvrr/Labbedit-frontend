import axios from "axios";
import logo from "../../Assets/Group3.png"
import useForm from "../../Hook/useForm";
import { useNavigate } from "react-router-dom";
import { goToPosts, goToSignUp } from "../../Routes/coordinator";
import { ButtonCadastro, Buttonlogin, ContainerLoguin, ContainerTitulos, DivPageLogin, StyledForm, StyledHr, StyledInput, StyledP, StyledTitulo } from "./styled";
import { BASE_URL } from "../../constants/BASE_URL";

const LoginPage = () => {
    const { form, onChange } = useForm({ email: "", password: "" });
    const navigate = useNavigate();

    const fazerLogin = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/users/login`, form).then(
            (response) => {
                localStorage.setItem("token", response.data.token)
                alert(response.data.message || response.data)
                goToPosts(navigate)
            }
        ).catch((error) => { alert(error) });
    };
    return (
        <DivPageLogin>
            <ContainerLoguin>
                <div>
                    <img src={logo} alt="Logo Labenu" />
                </div>
                <ContainerTitulos>
                <StyledTitulo>LabEddit</StyledTitulo>
                <StyledP>O projeto de rede social da Labenu</StyledP>
                </ContainerTitulos>
            </ContainerLoguin>
            <StyledForm onSubmit={fazerLogin}>
                <StyledInput
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder="  E-mail"
                    required
                />

                <StyledInput
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    placeholder="  Senha"
                    required
                />

                <Buttonlogin>Continuar</Buttonlogin>
            </StyledForm>

                <StyledHr />

            <ButtonCadastro onClick={() => goToSignUp(navigate)}>Crie uma conta!</ButtonCadastro>

        </DivPageLogin>
    )

}
export default LoginPage
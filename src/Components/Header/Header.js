import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/Group3.png"
import { goToHomePage } from "../../Routes/coordinator";
import { StyledHeader } from "./styled";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const logout = ()=>{
        localStorage.clear()
        goToHomePage(navigate)
    }
    return(
        <StyledHeader>
            <div></div>
        <img src={logo} alt="Logo Labenu"/>
        {
            location.pathname==="/cadastro"?
            <button onClick={()=>goToHomePage(navigate)}>Entrar</button>
            :
            <button onClick={logout} >Logout</button>
        }
        
        </StyledHeader>
    )
}
export default Header
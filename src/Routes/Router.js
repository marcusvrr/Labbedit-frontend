import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Components/LoginPage/LoginPage";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import PostsPage from "../Components/PostsPage/PostsPage";
import PostPage from "../Components/PostPage/PostPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CreateAccount/>} />
                <Route path="/posts" element={<PostsPage/>} />
                <Route path="/post/:id" element={<PostPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
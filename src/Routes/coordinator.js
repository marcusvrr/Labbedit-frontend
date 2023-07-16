export const goToHomePage = (navigate) => {
    navigate("/");
};

export const goToSignUp = (navigate) => {
    navigate("/cadastro");
};

export const goToPosts = (navigate) => {
    navigate("/posts");
};

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`);
};


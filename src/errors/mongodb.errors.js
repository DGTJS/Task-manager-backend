export const notFoundError = (res) => {
    return res
        .status(404)
        .send("Não foi possivel encontrar no banco de dados!");
};

export const InternalServerError = (res) => {
    return res
        .status(500)
        .send("Ops! Algo deu errado no servidor. Tente novamente");
};

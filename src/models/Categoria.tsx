export default interface Categoria {
    id: number;
    descricao: string;
    postagem?: Produto[] | null;
}
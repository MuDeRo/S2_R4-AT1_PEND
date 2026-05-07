export class Produto {
    #id;
    #idCategoria;
    #nomeProduto;
    #valor;
    #vinculoImagem;
    #dataCad;

    constructor(pIdCategoria, pNomeProduto, pValor, pVinculoImagem, pId) {
        this.idCategoria = pIdCategoria;
        this.nomeProduto = pNomeProduto;
        this.valor = pValor;
        this.vinculoImagem = pVinculoImagem;
        this.id = pId;

    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    get idCategoria() {
        return this.#idCategoria;
    }

    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    get nomeProduto() {
        return this.#nomeProduto;
    }

    set nomeProduto(value) {
        this.#validarNome(value);
        this.#nomeProduto = value;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#validarValor(value);
        this.#valor = value;
    }

    get vinculoImagem() {
        return this.#vinculoImagem;
    }

    set vinculoImagem(value) {
        this.#validarPathImagem(value);
        this.#vinculoImagem = value;
    }

   

    #validarId(value) {
        if (value !== null && value !== undefined && value <= 0) {
            throw new Error('O valor do ID não corresponde ao esperado');
        }
    }

    #validarIdCategoria(value) {
        if (!value || value <= 0) {
            throw new Error('O idCategoria é obrigatório e deve ser maior que zero');
        }
    }

    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 150) {
            throw new Error('O nome do produto deve ter entre 3 e 150 caracteres');
        }
    }


    #validarValor(value) {
        if (!value || value < 0) {
            throw new Error('O valor do produto deve ser maior que zero');
        }
    }

    #validarPathImagem(value) {
        if (value && value.trim().length < 5) {
            throw new Error('O caminho da imagem deve ter pelo menos 5 caracteres');
        }
    }

    static criar(dados) {
        return new Produto(dados.idCategoria, dados.nome, dados.valor, dados.caminhoImagem, null);
    }

    static editar(dados, id) {
        return new Produto(dados.idCategoria, dados.nome, dados.valor, dados.caminhoImagem, id);
    }
}
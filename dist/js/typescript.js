// Em ts as variáveis tem tipagem estática
// informa o tipo inicial com : tipo
// depois não pde mudar
// se não falar o tipo, o primeiro assign será o tip que ela recebe
let valor = 300;
let nome = '32';
let logicas = false;
let qualquer = "";
qualquer = 938;
// arrays
// você define o tipo do conteudo do array, ou ele coloca any
const listaQualquer = [];
listaQualquer.push("a", 1, false);
const listaTipada = [];
listaTipada.push(123);
// enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipo: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0.00
};
console.log(novaTransacao);

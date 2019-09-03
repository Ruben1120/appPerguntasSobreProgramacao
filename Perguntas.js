import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, ScrollView} from 'react-native';
import axios from "axios";
class Perguntas extends Component {
    constructor(props){
        super(props);
        this.state = {
            perguntas: [
                {pergunta: "Qual das linguagens não é orientada a objetos?", respostasErradas: ["PHP", "C++", "Java"], respostaCerta: "C"},
                {pergunta: "Na linguagem PHP, $_REQUEST se refere a um array associativo", respostasErradas: ["contendo variáveis de sessão disponíveis para o atual script.", "de variáveis passadas para o script atual via método HTTP REQUEST.", "contendo informações como cabeçalhos, paths, e localizações do script."], respostaCerta: "que, por padrão, contém informações de $_GET, $_POST e $_COOKIE."},
                {pergunta: "Em Python, os métodos de lista permitem utilizar listas como pilhas, onde o item adicionado por último é o primeiro a ser recuperado. Para adicionar um item ao topo da pilha, e para recuperar um item do topo da pilha utilizam-se, respectivamente os métodos:", respostasErradas: ["insert() e top().", "addTop() e pop().", "add() e get()."], respostaCerta: "append() e pop()."},
                {pergunta: "Marcos está desenvolvendo uma aplicação web PHP utilizando o WAMPServer. Como está utilizando um banco de dados MySQL, escolheu uma função para enviar uma consulta ou comando SQL (por exemplo, os comandos select, insert ou delete) para o banco de dados ativo. A função correta escolhida foi:", respostasErradas: ["mysql_fetch_array.", "mysql_update", "mysql_execute_stmt"], respostaCerta: "mysql_query."},
                {pergunta: "Assinale a alternativa que representa uma característica do Diagrama de Sequência.", respostasErradas: ["As interações entre objetos são representadas por setas rotuladas que ligam as linhas do tempo verticalmente.", "É um dos diagramas estruturais da UML.", "Os objetos envolvidos na interação são organizados verticalmente, com uma linha horizontal ligada a cada objeto."], respostaCerta: "A passagem do tempo é contada de cima para baixo no contexto do diagrama."},
                {pergunta: "Na engenharia de requisitos trata-se de uma técnica de elicitação que ocorre em ambiente mais informal em que toda a idéia deve ser levada em consideração para a solução de um problema, sendo proibida a crítica a qualquer sugestão dada, e encorajada, inclusive, a criação de ideias que pareçam estranhas ou exóticas:", respostasErradas: ["Prototipação.", "Entrevista.", "Questionário."], respostaCerta: "Brainstorming."},
                {pergunta: "Na Engenharia de Requisitos, o gerente de requisitos", respostasErradas: ["classifica os requisitos em diferentes tipos, sendo os do tipo funcional relacionados com o custo e confiabilidade do software e os do tipo não-funcional relacionados com os casos de uso.", "obtém o comprometimento dos integrantes da equipe de desenvolvimento de software para o cumprimento do processo de software.", "possui autonomia para realizar alterações no projeto para garantir que o software seja bem construído e atenda as necessidades da equipe de desenvolvimento."], respostaCerta: "mantém atualizados os requisitos junto ao usuário final e a equipe de desenvolvimento, a fim de obter sucesso no processo de homologação do software, atendendo as necessidades e expectativas."},
                {pergunta: "NO MPS.BR, o nível de maturidade G (Parcialmente Gerenciado) é composto pelos processos Gerência de Projetos e Gerência de Requisitos. Neste nível, a implementação dos processos deve satisfazer os atributos de processo", respostasErradas: ["AP 2.0 e AP 3.0.", "AP 1.0 e AP 1.1.", "AP 1.0 e AP 2.0."], respostaCerta: "AP 1.1 e AP 2.1."},
                {pergunta: "São componentes da Visual Component Library (VCL) do Delphi 7, que permitem acesso direto a objetos de banco de dados por meio do Borland Database Engine (BDE), EXCETO:", respostasErradas: ["TUpdateSQL.", "TQuery.", "TTable."], respostaCerta: "TComboBox"},
                {pergunta: "Um programador web deseja armazenar dados no navegador do usuário para rastrear ou identificar aqueles que retornam ao site. Para isso, no site que está sendo desenvolvido em PHP 7, deverá ser utilizada a função", respostasErradas: ["set_cookie ( ) em qualquer local página.", "setdrawcookie ( ) no interior do cabeçalho da página.", "setdrawcookie ( ) antes do corpo da página."], respostaCerta: "setcookie ( ) antes da tag html."},
                {pergunta: "Em relação à linguagem JavaScript, é correto afirmar:", respostasErradas: ["No código HTML da página Web, além dos seletores do CSS para a customização do elemento, é necessário a inclusão de um novo identificador para possibilitar a aplicação de recursos JavaScript sobre o elemento.", "Pelo fato da linguagem JavaScript ter sido projetado baseado na linguagem de programação C, ela é considerada uma linguagem de programação estruturada, não permitindo a utilização dos conceitos da orientação a objetos.", "A linguagem JavaScript é uma linguagem utilizada para a validação de formulários apenas no lado servidor da aplicação."], respostaCerta: "Na linguagem JavaScript não é necessário definir explicitamente o tipo da variável criada. Esse tipo é definido automaticamente no momento em que um valor é atribuído a variável."},
                {pergunta: "Qual a função da linguagem JavaScript responsável por avaliar um texto contendo um código JavaScript passado como parâmetro e retornar o resultado da execução?", respostasErradas: ["isFinite", "execute", "unescape"], respostaCerta: "eval"},
                {pergunta: "Uma das formas de desenvolver uma página dinâmica é através do uso de AJAX (Asynchronous JavaScript and XML), onde ele é utilizado para atualizar apenas parte da página Web. Sobre o AJAX, é correto afirmar:", respostasErradas: ["o AJAX baseia-se em tecnologias já disponíveis no lado cliente da navegação Web, entre elas a linguagem JavaScript.", "quando o AJAX é utilizado, todas as requisições enviadas ao servidor são assíncronas devido a limitação imposta pelo protocolo da camada de aplicação.", "o AJAX utiliza um protocolo proprietário para a troca de informações do cliente com o servidor, não sendo possível saber como esse procedimento é realizado."], respostaCerta: "o AJAX baseia-se em tecnologias já disponíveis no lado cliente da navegação Web, entre elas a linguagem JavaScript."},
                {pergunta: "Atualmente, Java e JavaScript estão entre as linguagens de programação de maior emprego pela indústria de software. Apesar da semelhança dos nomes, elas possuem muitas diferenças. Qual dos trechos abaixo é válido, tanto em JavaScript quanto em Java?", respostasErradas: ["function* x() { return 2; }", "X = = = 'true' : 10 : 20;", "x –> 1;"], respostaCerta: "switch(a) { case 'a': case 'A': return 'A'; }"},
                {pergunta: "Nas tecnologias PHP, PostgreSQL, XML, CSS, JavaScript e Java,", respostasErradas: ["o uso de PHP é necessário em páginas web dinâmicas.", "códigos escritos em JavaScript, quaisquer que sejam eles, são necessariamente executados em um browser, e não podem ser executados 'fora' de um browser.", "o uso de Java é incompatível com CSS e exige PHP para aplicações web."], respostaCerta: "dados podem ser armazenados no PostgreSQL e serializados em XML para transferência."},
                {pergunta: 'Na linguagem PHP:', respostasErradas: ['não há distinção entre letras maiúsculas e minúsculas.', 'existem dois comandos de repetição: if e switch.', 'não é possível definir suas próprias constantes.'], respostaCerta: 'existe a possibilidade de criar métodos abstratos.'},
                {pergunta: 'No mercado há uma série de frameworks que ajudam os desenvolvedores no processo de codificação e geração de softwares. Assinale a alternativa que contém apenas frameworks (contendo pacotes, classes e conjunto ferramental de suporte) utilizados para desenvolver soluções em PHP.', respostasErradas: ['.Net e Zend', 'JHipster e Laravel', 'SignalR e .NET'], respostaCerta: 'Laravel e Zend'},
                {pergunta: 'Acerca dos comandos em PHP, sobre arrays, uma das funções retorna um array com chaves e valores trocados. Essa função denomina-se:', respostasErradas: ['array_keys.', 'array_fill.', 'array_merge.'], respostaCerta: 'array-flip.'},
                {pergunta: 'Sobre comandos do PHP para diretórios, esta função obtém o diretório corrente de trabalho. Trata-se da função:', respostasErradas: ['readdir.', 'dir.', 'opendir.'], respostaCerta: 'getcwd.'},
                {pergunta: 'O PHP possui diversas funções que são utilizadas para manipulação de imagens. Uma dessas funções define o modo de transparência de uma imagem. Assinale a alternativa correta que apresenta essa função.', respostasErradas: ['getimagesize.', 'gd_info.', 'imagecolorallocatealpha.'], respostaCerta: 'imagealphablending.'},
                {pergunta: 'Em relação à linguagem JavaScript, é correto afirmar:', respostasErradas: ['No acesso a uma página Web, todo o conteúdo JavaScript é compilado no servidor antes de ser enviado ao navegador do usuário como forma de melhorar o desempenho.', 'No código HTML da página Web, além dos seletores do CSS para a customização do elemento, é necessário a inclusão de um novo identificador para possibilitar a aplicação de recursos JavaScript sobre o elemento.', 'Pelo fato da linguagem JavaScript ter sido projetado baseado na linguagem de programação C, ela é considerada uma linguagem de programação estruturada, não permitindo a utilização dos conceitos da orientação a objetos.'], respostaCerta: 'Na linguagem JavaScript não é necessário definir explicitamente o tipo da variável criada. Esse tipo é definido automaticamente no momento em que um valor é atribuído a variável.'},
                {pergunta: 'Em React.Js, como são chamadas as entradas que são passadas na criação dos componentes React, usando uma convenção de nomenclatura semelhante aos atributos de tag HTML.', respostasErradas: ['Keys', 'State', 'Elements'], respostaCerta: 'Props'},
                {pergunta: 'Sobre Vue.Js, assinale a alternativa correta.', respostasErradas: ['Mixins geralmente acrescentam funcionalidade ao Vue em nível global.', 'Pipes permitem que sejam declaradas as transformações de valor de exibição em seu template HTML', 'Plugins são uma forma flexível de distribuir funcionalidade reutilizável em diversos componentes Vue.'], respostaCerta: 'O Vue.js permite definir filtros que podem ser usados para aplicar formatação de texto comum.'},
                {pergunta: 'Para o desenvolvimento de aplicações Web, qual item abaixo contém apenas frameworks/bibliotecas/plataformas que foram desenvolvidas ou que dependem de JavaScript ou TypeScript:', respostasErradas: ['React, Node.js, Scala.', 'Angular, Node.js, Java.', 'Java AWT, Angular, Scala.'], respostaCerta: 'Angular, React, Vue.js.'},
            ],
            perguntaAtual: "",
            alternativaA: "",
            alternativaB: "",
            alternativaC: "",
            alternativaD: "",
            botao: "Proximo",
            minutos: 1,
            segundos: 0,
            statusA: {alternativa: {}, texto: {}},
            statusB: {alternativa: {}, texto: {}},
            statusC: {alternativa: {}, texto: {}},
            statusD: {alternativa: {}, texto: {}},
            alternativaCerta: "",
            jaRespondeu: false,
            nome: "",
            colocouNome: false,
            acertos: 0,
            erros: 0,
            pontuacao: 0,
            tempoAcabou: false,
            perguntasFeitas: [],
            debug: "",
        }
    }
    embaralhadorDeArray = (a) => {
        var aux = a.length;
        var indicesUsados = [];
        var arrayBaguncado = [];
        while(aux != 0){
            let numAleatorio = Math.floor(Math.random() * a.length);
            if(!indicesUsados.includes(numAleatorio)){
                indicesUsados.push(numAleatorio);
                arrayBaguncado.push(a[numAleatorio]);
                aux--;
            }
        }
        return arrayBaguncado;
    }
    proximaPergunta = (opcao) => {
        if(opcao == "reiniciar"){
            this.setState({minutos: 1, tempoAcabou: false, perguntasFeitas: [], acertos: 0, erros: 0, pontuacao: 0});
        }
        this.setState({jaRespondeu: false ,statusA: {alternativa: {}, texto: {}}, statusB: {alternativa: {}, texto: {}}, statusC: {alternativa: {}, texto: {}}, statusD: {alternativa: {}, texto: {}}});                
        let alternativas = ["A", "B", "C", "D"];
        var respostasErradasEmbaralhadas = [];
        var numAleatorioPergunta = Math.floor(Math.random() * this.state.perguntas.length);
        var aux = true;
        while(aux == true){
            if(this.state.perguntasFeitas.includes(numAleatorioPergunta)){
                numAleatorioPergunta = Math.floor(Math.random() * this.state.perguntas.length);
            }else{
                this.state.perguntasFeitas.push(numAleatorioPergunta);
                aux = false;
            }
        }
        let numAleatorioResposta = Math.floor(Math.random() * 4);
        let alternativaCorreta = alternativas[numAleatorioResposta];
        this.setState({perguntaAtual:  this.state.perguntas[numAleatorioPergunta].pergunta ,alternativaCerta: alternativaCorreta});
        respostasErradasEmbaralhadas = this.embaralhadorDeArray(this.state.perguntas[numAleatorioPergunta].respostasErradas);
        if(alternativaCorreta == "A"){
            this.setState({ alternativaA: this.state.perguntas[numAleatorioPergunta].respostaCerta, alternativaB: respostasErradasEmbaralhadas[0], alternativaC: respostasErradasEmbaralhadas[1], alternativaD: respostasErradasEmbaralhadas[2] });
        }else if(alternativaCorreta == "B"){
            this.setState({ alternativaB: this.state.perguntas[numAleatorioPergunta].respostaCerta, alternativaA: respostasErradasEmbaralhadas[0], alternativaC: respostasErradasEmbaralhadas[1], alternativaD: respostasErradasEmbaralhadas[2] });
        }else if(alternativaCorreta == "C"){
            this.setState({ alternativaC: this.state.perguntas[numAleatorioPergunta].respostaCerta, alternativaB: respostasErradasEmbaralhadas[0], alternativaA: respostasErradasEmbaralhadas[1], alternativaD: respostasErradasEmbaralhadas[2] });
        }else if(alternativaCorreta == "D"){
            this.setState({ alternativaD: this.state.perguntas[numAleatorioPergunta].respostaCerta, alternativaB: respostasErradasEmbaralhadas[0], alternativaC: respostasErradasEmbaralhadas[1], alternativaA: respostasErradasEmbaralhadas[2] });
        }
    }
    responder = (alter) => {
        if(this.state.jaRespondeu == false){
            this.setState({jaRespondeu: true});
            if(alter == this.state.alternativaCerta){
                this.setState({acertos: this.state.acertos + 1});
                if(alter == "A"){
                    this.setState({statusA: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(alter == "B"){
                    this.setState({statusB: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(alter == "C"){
                    this.setState({statusC: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(alter == "D"){
                    this.setState({statusD: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }
            }else{
                this.setState({erros: this.state.erros + 1});
                if(alter == "A"){
                    this.setState({statusA: {alternativa: {backgroundColor: "red"}, texto: { color: "white"}}});
                }else if(alter == "B"){
                    this.setState({statusB: {alternativa: {backgroundColor: "red"}, texto: { color: "white"}}});
                }else if(alter == "C"){
                    this.setState({statusC: {alternativa: {backgroundColor: "red"}, texto: { color: "white"}}});
                }else if(alter == "D"){
                    this.setState({statusD: {alternativa: {backgroundColor: "red"}, texto: { color: "white"}}});
                }
                if(this.state.alternativaCerta == "A"){
                    this.setState({statusA: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(this.state.alternativaCerta == "B"){
                    this.setState({statusB: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(this.state.alternativaCerta == "C"){
                    this.setState({statusC: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }else if(this.state.alternativaCerta == "D"){
                    this.setState({statusD: {alternativa: {backgroundColor: "green"}, texto: { color: "white"}}});
                }
            }
        }    
    }
    comecarTempo = () => {
        setInterval(() => {
            if(this.state.tempoAcabou == false){
                if(this.state.segundos == 0){
                    if(this.state.minutos == 0){
                        this.setState({tempoAcabou: true, pontuacao: (this.state.erros + this.state.acertos + this.state.perguntasFeitas.length) / 3});              
                        axios.post('http://linguagensdeprogramacao.000webhostapp.com/ranking.php', { senha: 'projeto123', nome: this.state.nome, pontos: this.state.pontuacao})
                        .then(function(response){
                            console.log(response);
                        });  
                    }else{
                        this.setState({minutos: this.state.minutos - 1});
                        this.setState({segundos: 59});
                    }
                }
                if(this.state.tempoAcabou == false){
                    this.setState({segundos: this.state.segundos - 1});
                }
            }
        }, 1000);
    }
    componentDidMount(){
        this.comecarTempo();
        this.proximaPergunta();
    }
    render(){
        if(this.state.colocouNome == false){
            return(
                <View style={estilos.container}>
                    <TextInput
                        style={{height: 50, borderColor: 'black', borderWidth: 1, borderRadius: 3, width: 200}}
                        onChangeText={(text)=>{ this.setState({nome: text}) }}
                        placeholder="Seu Nome"
                        value={this.state.nome}
                    />
                    <TouchableOpacity style={estilos.btn} onPress={()=>{ this.setState({colocouNome: true}) }}>
                        <Text style={estilos.rotuloBtn}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            );
        }else{
            if(this.state.tempoAcabou){
                return(
                    <View style={estilos.container}>
                        <Text style={{fontSize: 20, marginBottom: 10}}>{this.state.nome}</Text>
                        <Text style={{fontSize: 20}}>Perguntas Feitas: {this.state.perguntasFeitas.length}</Text>
                        <Text style={{color: "green", fontSize: 20}}>Acertos: {this.state.acertos}</Text>
                        <Text style={{color: "red", fontSize: 20}}>Erros: {this.state.erros}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Pontuação: {this.state.pontuacao.toFixed(2)}</Text>
                        <TouchableOpacity style={estilos.btn} onPress={this.proximaPergunta.bind(this, "reiniciar")}>
                            <Text style={estilos.rotuloBtn}>Reiniciar</Text>
                        </TouchableOpacity>
                    </View>
                );
            }else{
                return (
                    <View style={estilos.container}>
                        <ScrollView>
                        <View style={estilos.pergunta}><Text>{this.state.perguntaAtual}</Text></View>
                        <TouchableOpacity style={[estilos.alternativas, this.state.statusA.alternativa]} onPress={this.responder.bind(this, "A")}>
                            <Text style={this.state.statusA.texto}>A) {this.state.alternativaA}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[estilos.alternativas, this.state.statusB.alternativa]} onPress={this.responder.bind(this, "B")}>
                            <Text style={this.state.statusB.texto}>B) {this.state.alternativaB}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[estilos.alternativas, this.state.statusC.alternativa]} onPress={this.responder.bind(this, "C")}>
                            <Text style={this.state.statusC.texto}>C) {this.state.alternativaC}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[estilos.alternativas, this.state.statusD.alternativa]} onPress={this.responder.bind(this, "D")}>
                            <Text style={this.state.statusD.texto}>D) {this.state.alternativaD}</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={this.proximaPergunta.bind(this, "proxima")} style={estilos.btn}>
                                <Text style={estilos.rotuloBtn}>Próxima</Text>
                            </TouchableOpacity>
                            <Text style={estilos.tempo}>Tempo: 0{this.state.minutos}:{this.state.segundos}</Text>
                        </View>
                        </ScrollView>
                    </View>
                );
            }
        }
    } 
}

Perguntas.navigationOptions = {
    title: 'Perguntas'
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pergunta:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "black",
        padding: 20,
        margin: 10,
        marginBottom: 30,
        width: 300
    },
    alternativas:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "black",
        padding: 10,
        margin: 10,
        width: 300
    },
    btn: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "black",
        padding: 6,
        margin: 10,
        backgroundColor: "blue",
        width: 150
    },
    rotuloBtn:{
        color: "white",
        fontSize: 20,
        textAlign: 'center'
    },
    tempo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 13,
        marginLeft: 10,
    }
});
export default Perguntas;

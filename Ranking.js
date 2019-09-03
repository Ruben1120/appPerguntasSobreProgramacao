import React, {Component} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import axios from 'axios';
class Ranking extends Component{
    constructor(props){
        super(props);
        this.state = {
            dados: [],
            conexao: true
        }
    }
    carregarRanking = () => {
        axios.get('http://linguagensdeprogramacao.000webhostapp.com/Verranking.php')
        .then(response => {
            this.setState({dados: [
                {key: response.data[0].key, nome: response.data[0].nome, pontos: response.data[0].pontos},
                {key: response.data[1].key, nome: response.data[1].nome, pontos: response.data[1].pontos},
                {key: response.data[2].key, nome: response.data[2].nome, pontos: response.data[2].pontos},
                {key: response.data[3].key, nome: response.data[3].nome, pontos: response.data[3].pontos},
                {key: response.data[4].key, nome: response.data[4].nome, pontos: response.data[4].pontos},
                {key: response.data[5].key, nome: response.data[5].nome, pontos: response.data[5].pontos},
                {key: response.data[6].key, nome: response.data[6].nome, pontos: response.data[6].pontos},
                {key: response.data[7].key, nome: response.data[7].nome, pontos: response.data[7].pontos},
                {key: response.data[8].key, nome: response.data[8].nome, pontos: response.data[8].pontos},
                {key: response.data[9].key, nome: response.data[9].nome, pontos: response.data[9].pontos},
            ],
            conexao: true
        });
        })
        .catch(error => {
            this.setState({conexao: false});
        });
       
    }
    componentDidMount(){
       this.carregarRanking();  
    }
    render(){
        if(this.state.conexao){
            return(
                <View style={{flex: 1}}>
                    <Text>{this.state.teste}</Text>
                    <FlatList
                        data={this.state.dados}
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({item}) => { return(<View style={{borderRadius: 3, borderWidth: 1, borderWidth: 1, padding: 10, margin: 15}}><Text style={{fontSize: 20, textAlign: 'center'}}>{item.key}.{item.nome}</Text><Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Pontuação:{  item.pontos.toFixed(2).toString()}</Text></View>); }}
                    />
                </View>
            );
        }else{
            return (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "red", fontSize: 14, fontWeight: "bold"}}>Não foi possivel carregar o Ranking!</Text>
                    <Text style={{color: "red", fontSize: 14, fontWeight: "bold"}}>Conexao com a internet falhou!</Text>
                    <Button
                        title="Tentar novamente"
                        onPress={this.carregarRanking}
                    />
                </View>
            );
        }
    }
}

Ranking.navigationOptions = {
    title: 'Ranking'
}
export default Ranking;
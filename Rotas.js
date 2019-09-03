import Inicio from "./Inicio";
import Perguntas from './Perguntas';
import Ranking from "./Ranking";

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Rotas = createAppContainer(
    createStackNavigator({
        Inicio: Inicio,
        Perguntas: Perguntas,
        Ranking: Ranking,
    })
);

export default Rotas;
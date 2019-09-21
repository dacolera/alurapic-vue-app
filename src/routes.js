import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes =[
  {
    path : '',
    name : 'home',
    component : Home,
    title : 'Home',
    menu : true
  },
  {
    path : '/cadastro',
    name : 'cadastro',
    component : Cadastro,
    title : 'Cadastro',
    menu : true
  },
  {
    path : '*',
    component : Home
  }
];

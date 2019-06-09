import Curtain from './src/main';
Curtain.install = function(Vue) {
    Vue.component(Curtain.name, Curtain);
  };
  
export default Curtain;
  
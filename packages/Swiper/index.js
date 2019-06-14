import Swiper from './src/main';
Swiper.install = function(Vue) {
    Vue.component(Swiper.name, Swiper);
  };
  
export default Swiper;
  
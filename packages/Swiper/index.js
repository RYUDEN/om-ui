import Swiper from './src/main';
import SwiperItem from './src/SwiperItem';
Swiper.install = function(Vue) {
    Vue.component(Swiper.name, Swiper);
  };
SwiperItem.install = function(Vue){
  Vue.component(SwiperItem.name, SwiperItem);

}
export {Swiper,SwiperItem};
  
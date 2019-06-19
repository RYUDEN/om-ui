import Tabs from './src/main';
import Tabpane from './src/pane'
Tabs.install = function(Vue) {
    Vue.component(Tabs.name, Tabs);
};
Tabpane.install = function(Vue) {
  Vue.component(Tabpane.name, Tabpane);
};
export {Tabs,Tabpane};
  
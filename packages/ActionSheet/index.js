import ActionSheet from './src/main';
import ActionSheetItem from './src/child';

ActionSheet.install = function(Vue) {
    Vue.component(ActionSheet.name, ActionSheet);
  };
ActionSheetItem.install = function(Vue){
    Vue.component(ActionSheetItem.name, ActionSheetItem);
}
export {ActionSheet,ActionSheetItem};
  
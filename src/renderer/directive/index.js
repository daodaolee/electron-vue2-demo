import tooltip from './tooltip';
import copy from './copy';
import debounce from './debounce';
import draggable from './draggable'

const directives = {
  tooltip,
  copy,
  debounce,
  draggable
}
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
import Vue from 'vue';

Vue.directive('transformer', {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener('dblclick', function() {
      let effect = binding.arg || 'rotate';
      let increment = binding.value || 90;

      if (effect === 'rotate') {

        if (binding.modifiers.reverse) {
          increment*=-1
        }

        current+=increment;
      }

      switch (effect) {
        case 'rotate' : el.style.transform = `rotate(${current}deg)`; break;
        case 'scale'  : el.style.transform = `scale(${increment})`; break;
        default : el.style.transform = `rotate(${current}deg)`; break;
      }

      if (binding.modifiers.animate) {
        el.style.transition = 'transform 0.8s';
      }
    });
  }
});

<template>
    <div class="corpo">
      <meu-menu :routes="routes"></meu-menu>
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    import { routes } from './routes';
    import Menu from './components/shared/menu/Menu.vue';

    export default {
        data () {
            return {
                routes : routes.filter(route => route.menu)
            }
        },

        components : {
            'meu-menu' : Menu
        }
    }
</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .painel-leave-active {
    transition: opacity .9s;
  }

</style>

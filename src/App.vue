<template>
  <div id="app">
    <div class="container">
      <app-nav></app-nav>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'

  export default {
    name: 'app',
    components: {
      appNav: Nav
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* slide-animation */

  .slide-enter-active {
    animation: slide-in 250ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 250ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(200px);
      opacity: 0
    }

    to {
      transform: translateX(0);
      opacity: 1
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }

    to {
      transform: translateX(-200px);
      opacity: 0;
    }
  }

</style>

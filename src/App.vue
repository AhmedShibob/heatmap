<template>
  <div id="app">
    <div v-heatmap="showHeatmap" style="height: 1000px;width: 1000px;">
      <img height="1000px" width="1000px" src="https://s.yimg.com/uu/api/res/1.2/.UNeFRizayxt5n8b9Rk4_A--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/8077e086fe57dcd40c8ddc3dc0812482/204452788/edit24.jpg">
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { pauser } from './main';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data() {
    return {
      paused: false,
      showScrollmap: false,
      showHeatmap: true,
    };
  },

  methods: {
    pauseCollection() {
      this.paused = !this.paused;
      pauser.next(this.paused);
    },
  },

  async mounted() {
    window.addEventListener('load', () => {
      pauser.next(false);
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 900px;
}

#app canvas {
  height: 800px;
  width: 800px;
}
</style>

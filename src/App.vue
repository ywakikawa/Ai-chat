<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Prompt/>
  <router-link to="/miibo">miiboを表示</router-link>
  <router-view></router-view>
</template>

<script>
import Prompt from "./components/Prompt.vue";
import Miibo from "./components/miibo.vue";

export default {
  name: 'App',
  components: {
    Miibo,
    Prompt,
  },
}






</script>

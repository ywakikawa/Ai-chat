<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <div>
      <router-link to="/prompt">Promptを表示</router-link>
    </div>
    <div>
      <router-link to="/miibo">miiboを表示</router-link>
    </div>
    <div>
      <router-link to="/numberOne">numberOneを表示</router-link>
    </div>
    <div>
      <router-link to="/numberTwo">numberTwoを表示</router-link>
    </div>
    <div>
      <router-link to="/numberThree">numberThreeを表示</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Prompt from "./components/Prompt.vue";
import Miibo from "./components/miibo.vue";
import numberOne from "./components/numberOne.vue";
import numberThree from "./components/numberThree.vue";
import numberTwo from "./components/numberTwo.vue";

export default {
  name: 'App',
  components: {
    Miibo,
    Prompt,
    numberOne,
    numberTwo,
    numberThree,
  },
}






</script>

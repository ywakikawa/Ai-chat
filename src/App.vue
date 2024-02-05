<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <div>
      <router-link to="/prompt">Promptを表示</router-link>
    </div>
    <div>
      <router-link to="/miibo">サンプルを表示</router-link>
    </div>
    <div>
      <router-link to="/numberOne">大野さんページを表示</router-link>
    </div>
    <div>
      <router-link to="/numberTwo">財満さんページを表示</router-link>
    </div>
    <div>
      <router-link to="/numberThree">永川さんページを表示</router-link>
    </div>
    <p>👆クリックすると自分専用のページが表示されます</p>
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

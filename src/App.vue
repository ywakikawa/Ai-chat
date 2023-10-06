<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Prompt/>
</template>

<script>
import Prompt from "./components/Prompt.vue";
import OpenAiPrompt from "./components/OpenAiPrompt.vue";
export default {
  name: 'App',
  components: {
    Prompt,
  },
}






</script>

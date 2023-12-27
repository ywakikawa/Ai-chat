<template>
  <h1>AI Prompt</h1>
  <input type="text" v-model="userMessage">
  <button @click="sendMessage()" >送信</button>
  <p>{{errors}}</p>
  <p v-if="aiMessage">{{aiMessage}}</p>
</template>

<script>
import axios from 'axios';
import Miibo from "./miibo.vue";
export default {

  name: 'Prompt',
  components: {Miibo},
  data() {
    return {
      count: 0,
      aiMessage: "",
      userMessage: "",
      errors: "",

    }
  },
  methods: {
    sendMessage: function(){
      //ファイルもオブジェクトも両方送りたい場合にFormDataを使う
      const params = new FormData();
      params.append("apikey","DZZMO1Qt1Av82TrvvTYiC8PPoY7Xwf4d");
      params.append("query",this.userMessage);
      axios.post('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk',params)
          .then((response) =>{
            console.log(response.data.results[0]);
            this.aiMessage = response.data.results[0].reply;
          })
          .catch((error) =>{
            this.error = error;
          })
    }
  }
}
</script>
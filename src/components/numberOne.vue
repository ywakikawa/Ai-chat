<template>
  <div>
    <h1>1.大野さんページ</h1>
    <div>
<!--      <img class="img" src="../../download_image_1703836211774.png" alt="" loading="lazy" decoding="async"/>-->
      <p v-if="createAnswer">{{ aiMessage }}</p>
    </div>
    <div ></div>
    <div >
      <p v-if="balloonActive" >{{ utterance }}</p>
      <p v-else >{{ utterance }}</p>
<!--      <img class="img" src="../../download_image_1703651330593.png" alt="" loading="lazy" decoding="async"/>-->
    </div>
    <div ></div>
    <input type="text" v-model="utterance" placeholder="メッセージを入力" @input="onInput" >
    <button @click="sendMessage()" >送信</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Miibo',
  data() {
    return {
      utterance: "",
      aiMessage: "AIの回答が表示されます",
      errors: "",
      balloonActive: false,
      createAnswer: true,
    }
  },
  methods: {
    sendMessage() {
      this.createAnswer = false;
      const requestData = {
        api_key: "c58de4a6-622a-4ae5-ab62-19586e8fd5b518ca98d83c7291",
        utterance: this.utterance,//ここに自分が入力したメッセージが入る
        agent_id: "284dc48a-c5b6-495d-93c4-08a9738a5dd918ca98980b4335",
        uid: "mebo.ai_sample_001"//一意なIDを作成する
      };

      axios.post('https://api-mebo.dev/api', requestData)
          .then((response) => {
            console.log(response.data.bestResponse);
            this.aiMessage = response.data.bestResponse.utterance;
            this.createAnswer = true;
          })
          .catch((error) => {
            this.aiMessage = "エラー発生です。もう一度お試しください";
            this.errors = error;
            console.log(this.errors);
            this.createAnswer = true;
          });
    },
    onInput() {
      this.balloonActive = true;
    }
  }
}
</script>

<style>

</style>
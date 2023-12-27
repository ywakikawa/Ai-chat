<template>
  <h1>けんしゅうくんとトーク</h1>
  <input type="text" v-model="utterance">
  <button @click="sendMessage()">送信</button>
  <p>{{errors}}</p>
  <p v-if="aiMessage">{{aiMessage}}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Miibo',
  data() {
    return {
      utterance: "",
      aiMessage: "",
      errors: "",
    }
  },
  methods: {
    sendMessage() {
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
          })
          .catch((error) => {
            this.errors = error;
            console.log(this.errors);
          });
    }
  }
}
</script>
<template>
  <h1>今日は何を話しましょうか?</h1>
  <div class="chat"></div>

  <input type="text" v-model="userMessage">
  <button @click="sendMessage()" >送信</button>
  <p>{{errors}}</p>
  <p v-if="aiMessage">{{aiMessage}}</p>

</template>

<script>
import axios from 'axios';
export default {

  name: 'OpenAiPrompt',
  data() {
    return {
      aiMessage: "",
      userMessage: "",
      errors: "",
    }
  },
  methods: {
    sendMessage: function () {
      const params = {

        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+''
        },
        body: JSON.stringify({

          model: 'gpt-3.5-turbo',
          message: 'おはよう',
        })
      }
      fetch('https://api.openai.com/v1/chat/completions', params
      )
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.aiMessage = data.choices[0].message;
            messages.value.push(data.choices[0].message);

          })
          .catch(error => console.log(error))
    }
  }
,}
</script>
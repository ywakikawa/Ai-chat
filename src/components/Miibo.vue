<template>
  <div>
    <h1>お話してみよう〜〜</h1>
    <div class="balloon-009">
      <img class="img" src="../../download_image_1703836211774.png" alt="" loading="lazy" decoding="async"/>
      <p v-if="createAnswer">{{ aiMessage }}</p>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60" fill="#80527e">
        <path transform="translate(2)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                   dur="1.2s" calcMode="spline" begin="0" repeatCount="indefinite"
                   keytimes="0;.2;.5;1" keySplines=".2 .2 .4 .8;.2 0.6 .4 .8;.2 .8 .4 .8"/>
        </path>
        <path transform="translate(8)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                   dur="1.2s" calcMode="spline" begin=".2" repeatCount="indefinite"
                   keytimes="0;.2;.5;1" keySplines=".2 .2 .4 .8;.2 0.6 .4 .8;.2 .8 .4 .8"/>
        </path>
        <path transform="translate(14)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                   dur="1.2s" calcMode="spline" begin=".4" repeatCount="indefinite"
                   keytimes="0;.2;.5;1" keySplines=".2 .2 .4 .8;.2 0.6 .4 .8;.2 .8 .4 .8"/>
        </path>
        <path transform="translate(20)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                   dur="1.2s" calcMode="spline" begin=".6" repeatCount="indefinite"
                   keytimes="0;.2;.5;1" keySplines=".2 .2 .4 .8;.2 0.6 .4 .8;.2 .8 .4 .8"/>
        </path>
        <path transform="translate(26)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                   dur="1.2s" calcMode="spline" begin=".8" repeatCount="indefinite"
                   keytimes="0;.2;.5;1" keySplines=".2 .2 .4 .8;.2 0.6 .4 .8;.2 .8 .4 .8"/>
        </path>
      </svg>
    </div>
    <div class="space"></div>
    <div class="balloon-010">
      <p v-if="balloonActive" class="active">{{ utterance }}</p>
      <p v-else class="passive">{{ utterance }}</p>
      <img class="img" src="../../download_image_1703651330593.png" alt="" loading="lazy" decoding="async"/>
    </div>
    <div class="space"></div>
    <input type="text" v-model="utterance" placeholder="メッセージを入力" @input="onInput" class="form-left-radius">
    <button @click="sendMessage()" class="btn-right-radius">送信</button>
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
.balloon-009 {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0 22px;
}

.balloon-009 .img {
  max-width: 70px;
  height: 100%;
  border: 3px solid #e6edf3;
  border-radius: 50%;
}

.balloon-009 p {
  position: relative;
  height: 30px;
  margin: 3px 0 0;
  padding: .8em 1em;
  border-radius: 5px;
  background-color: #fbedfd;
  color: #333333;
}

.balloon-009 p::before {
  position: absolute;
  left: -15px;
  width: 15px;
  height: 15px;
  background-color: #fbedfd;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  content: '';
}

.balloon-010 {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0 22px;
}

.balloon-010 .img {
  max-width: 70px;
  height: 100%;
  border: 3px solid #e6edf3;
  border-radius: 50%;
}

.balloon-010 p {
  position: relative;
  height: 30px;
  margin: 3px 0 0;
  padding: .8em 1em;
  border-radius: 5px;
  background-color: #e0efff;
  color: #333333;
}

.balloon-010 p::before {
  position: absolute;
  right: -15px;
  width: 15px;
  height: 15px;
  background-color: #e0efff;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  content: '';
}

.balloon-010 .active {
  max-width: none;
  width: auto;
}

.balloon-010 .passive {
  width: 200px;
  height: 30px;
}

.space {
  width: 20px;
  height: 40px;
}

.btn-right-radius {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #ECECEC;
  background: #636363;
  border-radius: 0 15px 15px 0;
  border: 1px solid #636363;
}
.btn-right-radius:hover {
  background: #ECECEC;
  border: #ECECEC;
  color: #636363;
}

.form-left-radius {
  position: relative;
  display: inline-block;
  height: 20px;
  width: auto;
  font-weight: normal;
  padding: 0.25em 0.5em;
  text-decoration: none;
  background: #ECECEC;
  border-radius: 15px 0 0 15px;
  border: 2px solid #ECECEC;
  transition: .4s;
}
</style>
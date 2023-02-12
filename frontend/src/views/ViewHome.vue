<template>
  <main>
    <div class="chat-container">
      <input type="text" v-model="question" />
      <button @click="setInput">Send</button>
    </div>

    <div class="answer-container">
      <p>{{ postCompletition }}</p>
    </div>
  </main>
</template>

<script setup>
import { useAppStore } from "@/store/AppStore.js";
import { ref } from "vue";

const appStore = useAppStore();

const question = ref(null);
const postCompletition = ref(null);

const setInput = async () => {
  console.log("setInput running...");
  if (!question.value || question.value == "") {
    console.log("Please add a question...");
    return;
  }

  postCompletition.value = await appStore.postCompletition(question.value);
};
</script>

<style></style>

<template>
  <main>
    <div class="chat-container">
      <input type="text" v-model="question" />
      <button @click="setInput">Send</button>
    </div>
  </main>
</template>

<script setup>
import { useRequestsStore } from "@/stores/RequestsStore.js";
import { ref } from "vue";

const requestStore = useRequestsStore();

const question = ref(null);

const setInput = async () => {
  console.log("setInput running...");
  if (!question.value || question.value == "") {
    console.log("Please add a question...");
    return;
  }

  const postCompletition = await requestStore.postCompletition(question.value);

  console.log(postCompletition);
};
</script>

<style></style>

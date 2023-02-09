<template>
  <main>
    <div class="chat-container">
      <form @submit.prevent="fetchAnswer">
        <textarea
          rows="1"
          cols="1"
          placeholder="Ask VueChat..."
          v-model="question"
        ></textarea>
        <button type="submit">
          <img src="@/assets/send.svg" alt="send" />
        </button>
      </form>
    </div>
  </main>
</template>

<script></script>

<style></style>

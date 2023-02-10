import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

const useRequestsStore = defineStore("requestsStore", () => {
  const state = reactive({});

  const actions = {
    postCompletitions: async () => {
      const response = await axios.post(`http://localhost:8000/completitions`, {
        question: "What is your name?",
      });

      console.log(response);
    },
  };

  const computed = {};

  return { ...actions, ...computed };
});

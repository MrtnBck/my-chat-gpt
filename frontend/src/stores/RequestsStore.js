import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useRequestsStore = defineStore("requestsStore", () => {
  const state = reactive({});

  const actions = {
    postCompletition: async (question) => {
      console.log(question);
      const response = await axios.post(
        ` http://localhost:8000/openai/api/completitions`,
        {
          question: question,
        }
      );

      console.log(response);
      return response.bot;
    },
  };

  const computed = {};

  return { ...actions, ...computed };
});

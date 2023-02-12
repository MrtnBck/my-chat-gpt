// Utilities
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    //
  }),
  actions: {
    postCompletition: async (question) => {
      const response = await axios.post(
        ` http://localhost:8000/openai/api/completitions`,
        {
          question: question,
        }
      );
      return response.data;
      //return response.data.text;
    },
  },
});

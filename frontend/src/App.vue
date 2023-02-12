<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <v-container class="bg-green w-70%">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "@/components/AppBar.vue";
//
</script>

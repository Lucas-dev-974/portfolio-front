<template>
  <div id="btm-navigation">
      <v-icon class="btm-navigation-item" @click='$store.commit("dashGotToPage", "post")'>mdi-post</v-icon>

      <v-icon class="btm-navigation-item" @click='$store.commit("dashGotToPage", "project")'>mdi-alien-outline</v-icon>

      <v-icon class="btm-navigation-item" @click='$store.commit("dashGotToPage", "note")'>mdi-note-text-outline</v-icon>
  </div>
</template>

<script src="./js/dashBottomNavigation.js"></script>
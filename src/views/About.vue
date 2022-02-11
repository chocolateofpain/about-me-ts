<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Home />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "@/components/Home.vue"; // @ is an alias to /src

@Options({
  components: {
    Home,
  },
})
export default class About extends Vue {}
</script>

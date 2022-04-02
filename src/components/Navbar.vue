<template>
  <div class="flex flex-col w-[200px]" id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/random">Random</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    return {};
  },
});
</script>

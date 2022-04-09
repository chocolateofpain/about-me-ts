<template>
  <div class="relative">
    <Transition mode="out-in">
      <Navbar v-if="showNavbar" class="absolute" />
      <div v-else />
    </Transition>
    <router-view :class="{ 'ml-48': showNavbar }" />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: { Navbar },
  setup() {
    const route = useRoute();

    const showNavbar = computed(() => route.name !== "Home");

    return {
      showNavbar,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #0369a1;
}
.v-enter-active,
.v-leave-active {
  top: 10px;
  transition: all 0.5s ease-in-out;
  /* transform-origin: left top;
  transition: transform 1s; */
  /* // transition: opacity 0.5s ease; */
  /* transform: translate(20px, 20px) 1s; */
}

.v-enter-from,
.v-leave-to {
  top: -1000px;
}
</style>

<template>
  <div class="relative h-full">
    <Transition mode="out-in" :isAnimated="showNavbar">
      <Navbar v-if="showNavbar" class="absolute" :isAnimated="showNavbar" />
      <div v-else />
    </Transition>
    <router-view :class="{ 'ml-40': showNavbar }" />
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
    const showNavbar = computed(
      () => route.name !== "Home" && route.name !== undefined
    );

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
/* 
#nav a.router-link-exact-active {
  color: #161717;
} */
.v-enter-active,
.v-leave-active {
  top: 10px;
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  top: -1000px;
}
</style>

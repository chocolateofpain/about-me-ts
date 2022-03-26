<template>
  <div class="grid grid-cols-[200px,minmax(400px,900px)]">
    <Transition mode="out-in">
      <Navbar v-if="showNavbar" />
      <div v-else />
    </Transition>
    <router-view />
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  /* transform: translate(20px, 20px) 1s; */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

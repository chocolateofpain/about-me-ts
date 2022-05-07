<template>
  <div class="relative h-full">
    <Transition mode="out-in" :isAnimated="showNavbar" v-if="!isSmallScreen">
      <Navbar v-if="showNavbar" class="absolute" :isAnimated="showNavbar" />
      <div v-else />
    </Transition>
    <NavbarMenu
      class="absolute sticky top-0 left-0 z-10 w-full bg-white"
      v-if="showNavbar && isSmallScreen"
    />
    <router-view
      :class="{
        'ml-40': showNavbar && !isSmallScreen,
      }"
      class="test"
    />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  onUnmounted,
  ref,
} from "vue";
import Navbar from "@/components/Navbar.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: { Navbar, NavbarMenu },
  setup() {
    const route = useRoute();
    const showNavbar = computed(
      () => route.name !== "Home" && route.name !== undefined
    );

    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    onBeforeMount(() => {
      window.addEventListener("resize", onResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });

    const onResize = () => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    };

    const windowScreenWidth = ref(window.screen.width);

    const isSmallScreen = computed(() => width.value < 640);

    return {
      showNavbar,
      windowScreenWidth,
      isSmallScreen,
      width,
      height,
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

.v-enter-active,
.v-leave-active {
  top: 10px;
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  top: -1000px;
}

.test {
  height: calc(100vh - 64px);
}
</style>

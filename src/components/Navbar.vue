<template>
  <div
    class="grid grid-rows-4 w-[150px] h-full gap-2 text-sky-900 active:text-sky-400"
    id="nav"
  >
    <router-link
      v-for="item in availableLinks"
      :to="item.to"
      v-bind:key="item.title"
    >
      <Polaroid :title="item.title" :image="item.image" />
    </router-link>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import Polaroid from "./Polaroid.vue";
import { navbarItems } from "./../constants";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Navbar",
  components: {
    Polaroid,
  },
  setup() {
    const route = useRoute();
    const availableLinks = computed(() =>
      navbarItems.filter((item) => item.to !== route.path)
    );
    return {
      availableLinks,
    };
  },
});
</script>

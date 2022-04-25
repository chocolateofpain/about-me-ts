<template>
  <div
    class="grid h-full grid-rows-4 gap-2 p-5 text-base text-sky-900 active:text-sky-400"
    id="nav"
  >
    <router-link
      class="font-light text-gray-900 no-underline uppercase hover:font-bold"
      v-for="item in availableLinks"
      :to="item.to"
      v-bind:key="item.title"
    >
      <Polaroid :title="item.title" :image="item.image" size="small" />
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

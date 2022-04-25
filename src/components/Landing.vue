<template>
  <div class="grid justify-center grid-cols-2 gap-4">
    <router-link
      v-for="item in landingPageLinks"
      :key="item.title"
      :to="item.to"
    >
      <Polaroid :title="item.title" :image="item.image" />
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Polaroid from "./Polaroid.vue";
import { navbarItems } from "./../constants";

interface NavbarItem {
  title: string;
  image: string;
  to: string;
}

export default defineComponent({
  name: "Landing",
  components: { Polaroid },
  setup() {
    const landingPageLinks = computed(() =>
      navbarItems.filter((item: NavbarItem) => item.title !== "Home")
    );

    return {
      landingPageLinks,
    };
  },
});
</script>

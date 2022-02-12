<template>
  <div class="grid gap-4 grid-cols-2 justify-center w-[fit-content]">
    <Polaroid :title="menuItems.ABOUTME" image="berlin_png.png" />
    <Polaroid :title="menuItems.CONTACT" image="metro.png" />
    <Polaroid :title="menuItems.PROJECTS" image="palmtree.png" />
    <Polaroid :title="menuItems.RANDOM" image="beach.png" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import Polaroid from "./Polaroid.vue";

export default defineComponent({
  name: "Landing",
  components: { Polaroid },
  setup() {
    const menuItems = reactive({
      ABOUTME: "About me",
      CONTACT: "Contact",
      PROJECTS: "Projects",
      RANDOM: "Random",
    });

    onMounted(() => console.log("Your thing is mounted"));

    return {
      menuItems,
    };
  },
});
</script>

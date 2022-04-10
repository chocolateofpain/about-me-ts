<template>
  <div
    class="flex flex-col w-[200px] gap-2 text-sky-900 active:text-sky-400"
    id="nav"
  >
    <router-link to="/">
      <Polaroid
        :title="menuItems.HOME"
        :width="125"
        :height="150"
        image="berlin_png.png"
      />
    </router-link>
    <router-link to="/about">
      <Polaroid
        :title="menuItems.ABOUTME"
        :width="125"
        :height="150"
        image="berlin_png.png"
      />
    </router-link>
    <router-link to="/projects">
      <Polaroid
        :title="menuItems.PROJECTS"
        :width="125"
        :height="150"
        image="palmtree.png"
      />
    </router-link>
    <router-link to="/random">
      <Polaroid
        :title="menuItems.RANDOM"
        :width="125"
        :height="150"
        image="beach.png"
      />
    </router-link>
    <router-link to="/contact">
      <Polaroid
        :title="menuItems.CONTACT"
        :width="125"
        :height="150"
        image="metro.png"
      />
    </router-link>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Polaroid from "./Polaroid.vue";
import { menuItems } from "./../constants";

export default defineComponent({
  name: "Navbar",
  components: {
    Polaroid,
  },
  setup() {
    return {
      menuItems,
    };
  },
});
</script>

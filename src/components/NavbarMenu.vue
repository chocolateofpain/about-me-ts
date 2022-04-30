<template>
  <MenuIcon @click="showMenu = !showMenu" class="w-[48px]" />
  <div
    v-if="showMenu"
    class="grid h-full grid-rows-4 gap-2 p-5 text-base text-sky-900 active:text-sky-400"
    id="nav"
  >
    <router-link
      class="font-light text-gray-900 no-underline uppercase hover:font-bold"
      v-for="item in availableLinks"
      :to="item.to"
      v-bind:key="item.title"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>
<script>
import { defineComponent, ref, computed, watch } from "vue";
import { navbarItems } from "../constants";
import { useRoute } from "vue-router";
import { MenuIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "NavbarMenu",
  components: {
    MenuIcon,
  },
  setup() {
    const route = useRoute();
    const showMenu = ref(false);
    const availableLinks = computed(() =>
      navbarItems.filter((item) => item.to !== route.path)
    );

    watch(
      () => route.path,
      () => (showMenu.value = false)
    );
    return {
      availableLinks,
      showMenu,
    };
  },
});
</script>

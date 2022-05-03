<template>
  <div class="relative">
    <div class="flex items-center w-full h-16 p-2 bg-white">
      <MenuIcon
        @click="showMenu = !showMenu"
        class="w-[48px] z-20 bg-white text-gray-900"
      />
      <h1
        class="w-full text-2xl font-semibold text-gray-900 uppercase pr-[48px]"
      >
        {{ currentPage.title }}
      </h1>
    </div>
    <Transition mode="out-in" class="absolute" :isAnimated="showMenu">
      <div
        v-if="showMenu"
        class="grid w-full grid-rows-4 text-base bg-white border divide-y -z-10 text-sky-900"
        id="nav"
      >
        <router-link
          class="flex items-center justify-center h-16 font-light text-gray-900 no-underline uppercase"
          v-for="item in availableLinks"
          :to="item.to"
          v-bind:key="item.title"
        >
          {{ item.title }}
        </router-link>
      </div>
    </Transition>
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
    const currentPage = computed(() =>
      navbarItems.find((item) => item.to === route.path)
    );
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
      currentPage,
    };
  },
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  top: 64px;
  transition: all 0.8s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  top: -256px;
}
</style>

<template>
  <div
    class="border hover:shadow-2xl hover:underline p-2 shadow-lg w-[250px] h-[300px]"
  >
    <router-link :to="routerLink">
      <img :src="imageUrl" v-bind:alt="image" width="250" height="250" />
      <div class="mt-4">
        {{ polaroidTitle }}
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Polaroid",
  props: {
    title: String,
    image: String,
  },
  setup(props) {
    const polaroidTitle = computed(() => props.title || "Hello Murder Raccoon");

    const imageUrl = computed(() => require("../assets/" + props.image));

    const routerLink = computed(() => `/${props.title?.toLowerCase()}`);

    return {
      polaroidTitle,
      imageUrl,
      routerLink,
    };
  },
});
</script>

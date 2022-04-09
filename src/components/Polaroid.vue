<template>
  <div
    :class="`border hover:shadow-3xl hover:underline shadow-md p-2 w-[${width}px] h-[${height}px] transition-all duration-1000`"
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
    height: {
      type: Number,
      default: 300,
    },
    width: {
      type: Number,
      default: 250,
    },
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

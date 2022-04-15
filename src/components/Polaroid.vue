<template>
  <div :class="`border hover:shadow-3xl hover:underline shadow-md p-2`">
    <img :src="imageUrl" :alt="image" />
    <div class="mt-2 sm:mt-4">
      {{ polaroidTitle }}
    </div>
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
      type: Number || String,
      default: "auto",
    },
    width: {
      type: Number || String,
      default: "auto",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  setup(props) {
    const polaroidTitle = computed(() => props.title);

    const imageUrl = computed(() => require("../assets/" + props.image));

    return {
      polaroidTitle,
      imageUrl,
    };
  },
});
</script>

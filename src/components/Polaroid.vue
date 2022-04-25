<template>
  <div
    :class="`border hover:shadow-3xl w-[${width}px] hover:underline shadow-md p-2`"
  >
    <img :src="imageUrl" :alt="image" :width="width" />
    <div class="mt-2 text-gray-900 no-underline uppercase hover:font-bold">
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
    size: {
      type: String,
      default: "medium",
    },
  },
  setup(props) {
    const polaroidTitle = computed(() => props.title);

    const imageUrl = computed(() => require("../assets/" + props.image));

    const width = computed(() => {
      if (props.size === "small") {
        return 90;
      }
      if (props.size === "big") {
        return 500;
      }
      return 250;
    });

    return {
      polaroidTitle,
      imageUrl,
      width,
    };
  },
});
</script>

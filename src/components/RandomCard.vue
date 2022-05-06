<template>
  <article
    class="w-[300px] h-auto p-4 sm:w-[400px] text-black rounded-lg backdrop-blur-md bg-white/30 sm:border"
  >
    <h3 class="pb-2 font-black tracking-wider uppercase">{{ props.title }}</h3>
    <p class="pb-2">{{ props.description }}</p>
    <a class="font-semibold" :href="props.link" target="_blank">Website</a>
  </article>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RandomCard",
  props: {
    title: String,
    description: String,
    link: String,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

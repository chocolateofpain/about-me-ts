<template>
  <h1 class="py-5 text-xl font-extrabold tracking-wide uppercase">
    {{ title }}
  </h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    title: String,
  },
});
</script>

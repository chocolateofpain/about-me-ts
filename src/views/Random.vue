<template>
  <div class="h-full bg-center bg-cover bg-pool sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Random" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "Random",
  components: {
    Header,
  },
});
</script>

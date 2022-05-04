<template>
  <div class="h-full bg-center bg-cover photo sm:bg-white">
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
<style scoped>
@media (max-width: 640px) {
  .photo {
    backdrop-filter: grayscale(var(--value, 100%));
    background-image: linear-gradient(
        to bottom,
        rgba(38, 38, 39, 0.52),
        rgba(110, 107, 109, 0.73)
      ),
      url(../assets/pool.jpg);
  }
}
</style>

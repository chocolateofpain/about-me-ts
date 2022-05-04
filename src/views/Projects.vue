<template>
  <div class="w-full h-full bg-center bg-cover bg-palmtree sm:bg-white">
    <Header class="hidden sm:block" title="Projects" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Projects extends Vue {}
</script>
<style scoped>
@media (max-width: 640px) {
  .bio {
    backdrop-filter: grayscale(var(--value, 100%));
    background-image: linear-gradient(
        to bottom,
        rgba(38, 38, 39, 0.52),
        rgba(110, 107, 109, 0.73)
      ),
      url(../assets/metro.png);
  }
}
</style>

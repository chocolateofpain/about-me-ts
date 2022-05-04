<template>
  <div class="h-full bg-center bg-cover bio">
    <Header class="hidden sm:block" title="About" />
    <Bio />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Bio from "@/components/Bio.vue";

@Options({
  components: {
    Bio,
    Header,
  },
})
export default class About extends Vue {}
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

<template>
  <div class="h-full">
    <Header class="hidden sm:block" title="About" />
    <Bio class="h-full bg-red-door" />
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

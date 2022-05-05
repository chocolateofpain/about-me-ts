<template>
  <div
    class="w-full h-full bg-center bg-cover bg-palmtree sm:bg-none sm:bg-white"
  >
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

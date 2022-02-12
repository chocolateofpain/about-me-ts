<template>
  <div class="view-container">
    <Header title="Projects" />
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

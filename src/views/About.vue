<template>
    <Bio />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Bio from "@/components/Bio.vue";

@Options({
  components: {
    Bio,
  },
})
export default class About extends Vue {}
</script>

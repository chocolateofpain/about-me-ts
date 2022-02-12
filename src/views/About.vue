<template>
  <div class="home view-container">About</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Landing from "@/components/Landing.vue"; // @ is an alias to /src

@Options({
  components: {
    Landing,
  },
})
export default class About extends Vue {}
</script>

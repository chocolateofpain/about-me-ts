<template>
  <div class="flex place-content-center view-container">
    <Landing />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Landing from "@/components/Landing.vue"; // @ is an alias to /src

@Options({
  components: {
    Landing,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="flex place-content-center view-container">
    <Landing />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Landing from "@/components/Landing.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { Landing },
  setup() {
    return {};
  },
});
</script>

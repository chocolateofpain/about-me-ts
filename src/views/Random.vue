<template>
  <div>
    <Header title="Random" />
    <div>Hover here</div>
    <MyFloatingThingy />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import MyFloatingThingy from "@/components/MyFloatingThingy.vue";

export default defineComponent({
  name: "Random",
  components: {
    Header,
    MyFloatingThingy,
  },
});
</script>

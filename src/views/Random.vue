<template>
  <div class="h-full bg-center bg-cover bg-pool sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Random" />
    <RandomCard
      v-for="item in randomItems"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import RandomCard from "@/components/RandomCard.vue";
import { randomItems } from "@/constants";

export default defineComponent({
  name: "Random",
  components: {
    Header,
    RandomCard,
  },
  setup() {
    return {
      randomItems,
    };
  },
});
</script>

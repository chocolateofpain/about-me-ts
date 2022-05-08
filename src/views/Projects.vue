<template>
  <div class="w-full bg-center bg-cover bg-palmtree sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Projects" />
    <div>
      <ProjectCard v-for="item in projects" :key="item.id" project="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import Header from "@/components/Header.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Header,
    ProjectCard,
  },
  setup() {
    // TODO fetch projects from Github
    const projects = [];
    return {
      projects,
    };
  },
});
</script>

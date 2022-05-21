<template>
  <div class="w-full bg-center bg-cover bg-palmtree sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Projects" />
    <div
      class="grid grid-cols-1 gap-4 pt-4 justify-items-center md:grid-cols-3"
    >
      <ProjectCard v-for="item in projects" :key="item.id" :project="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Header,
    ProjectCard,
  },
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      await store.dispatch("fetchProjects");
    });

    const projects = computed(() => store.getters.getProjects);

    return {
      projects,
    };
  },
});
</script>

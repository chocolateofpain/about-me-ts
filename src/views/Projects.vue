<template>
  <div class="w-full bg-center bg-cover bg-palmtree sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Projects" />
    <div>
      <ProjectCard v-for="item in projects" :key="item.id" project="item" />
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
    // TODO fetch projects from Github

    onBeforeMount(async () => {
      await store.dispatch("fetchProjects");
    });

    const projects2 = computed(() => store.getters.getProjects);

    return {
      projects: computed(() => store.state.projects),
      projects2,
    };
  },
});
</script>

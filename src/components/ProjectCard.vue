<template>
  <article
    class="p-4 border rounded w-[300px] backdrop-blur-md bg-white/70 md:bg-white"
  >
    <h1 class="font-extrabold uppercase">{{ project.name }}</h1>
    <p>{{ project.description || "what the project is about" }}</p>
    <a v-if="project.homepage" :href="project.homepage" target="_blank"
      >Website
    </a>
    <a :href="project.html_url" target="_blank">Githup repo</a>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

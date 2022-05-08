<template>
  <article>
    <h1>{{ props.title || "Project name" }}</h1>
    <p>{{ props.description || "what the project is about" }}</p>
    <a :href="props.link">Website</a>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  setup(props) {
    return {
      props,
    };
  },
});
</script>

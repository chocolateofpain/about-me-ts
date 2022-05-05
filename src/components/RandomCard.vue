<template>
  <div>{{ props.title }}</div>
  <div>{{ props.description }}</div>
  <div>{{ props.link || "no link yet" }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RandomCard",
});
</script>

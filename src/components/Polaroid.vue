<template>
  <div class="border-2 hover:border-4">
    {{ myTitle }}
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";

export default defineComponent({
  name: "Polaroid",
  props: {
    title: String,
  },
  setup(props) {
    const myTitle = computed(() => props.title || "Hello Murder Raccoon");

    onMounted(() => console.log("Your thing is mounted"));

    return {
      myTitle,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div
    class="border hover:shadow-2xl hover:underline p-2 shadow-lg w-[250px] h-[300px]"
  >
    <router-link :to="routerLink">
      <img :src="getImageUrl()" v-bind:alt="image" width="250" height="250" />
      <div class="mt-4">
        {{ polaroidTitle }}
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";

export default defineComponent({
  name: "Polaroid",
  props: {
    title: String,
    image: String,
  },
  setup(props) {
    const polaroidTitle = computed(() => props.title || "Hello Murder Raccoon");

    const getImageUrl = () => {
      return require("../assets/" + props.image);
    };

    const routerLink = computed(() => `/${props.title?.toLowerCase()}`);

    onMounted(() => console.log("Your thing is mounted"));

    return {
      polaroidTitle,
      getImageUrl,
      routerLink,
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

<template>
  <article
    class="flex flex-col px-6 py-16 text-3xl text-justify text-white bg-center sm:text-left sm:text-black bio"
  >
    <p>
      I'm a Javascript developers with emphasis on Frontend technologies, mainly
      Vue and React. A former Art student, I discovered coding a couple of years
      ago and now do it full-time at Checkly, the amazing company that fulfills
      both your monitoring and raccoon needs.
    </p>
    <p class="pt-10">When doodling I usually draw cute animals.</p>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bio",
});
</script>
<style scoped>
@media (max-width: 640px) {
  .bio {
    background-image: linear-gradient(
        to bottom,
        rgba(38, 38, 39, 0.52),
        rgba(110, 107, 109, 0.73)
      ),
      url(../assets/metro.png);
  }
}
</style>

<template>
  <article class="text-left">
    <p>
      I'm a Javascript developers with emphasis on Frontend technologies, mainly
      Vue and React. A former Art student, I discovered coding a couple of years
      ago and now do it full-time at Checkly, the amazing company that fulfills
      both your monitoring and raccoon needs.
    </p>
    <p>When doodling I usually draw cute animals.</p>
    <div>
      <Arrow />
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Arrow from "./Arrow.vue";

export default defineComponent({
  name: "Bio",
  components: {
    Arrow,
  },
});
</script>

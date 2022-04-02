<template>
  <article class="text-left">
    <div class="grid justify-center grid-cols-2">
      <a class="block" href="https://github.com/chocolateofpain" target="_blank"
        >Github
      </a>
      <a
        class="block"
        href="https://twitter.com/chocolateofpain"
        target="_blank"
        >Twitter
      </a>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contacts",
  setup(props) {
    return {};
  },
});
</script>

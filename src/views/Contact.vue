<template>
  <div
    class="flex flex-col items-center justify-center h-full bg-center bg-cover backdrop-filter backdrop-grayscale photo"
  >
    <Header class="hidden sm:block" title="Contact" />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Contacts from "@/components/Contacts.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Header,
    Contacts,
  },
});
</script>
<style scoped>
@media (max-width: 640px) {
  .photo {
    background-image: url(../assets/everything-ok.jpg);
    filter: grayscale(1);
  }
}
</style>

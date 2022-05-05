<template>
  <div
    class="flex flex-col items-center justify-center h-full bg-center bg-cover bg-everything-ok sm:bg-none sm:bg-white"
  >
    <Header class="hidden sm:block" title="Contact" />
    <Contacts class="backdrop-filter backdrop-grayscale" />
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

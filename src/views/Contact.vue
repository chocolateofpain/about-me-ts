<template>
  <div class="view-container">
    <Header title="Contact" />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Contacts from "@/components/Contacts.vue";

@Options({
  components: {
    Contacts,
    Header,
  },
})
export default class Contact extends Vue {}
</script>

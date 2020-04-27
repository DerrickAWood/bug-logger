<template>
  <div class="home text-center">
    <h1>Welcome to Bug Logger</h1>
    <create-bug></create-bug>
      <div class=" m-2" v-for="bug in bugs" :key="bug.id">
      <router-link
        :to="{name: 'bug', params: {bugId: bug.id}}"
      >{{bug.title}}</router-link>
    </div>
  </div>
</template>

<script>
import CreateBug from "../components/CreateBug";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
      return this.$store.state.activeBug;
    }
  },
  methods: {
  },
  components: { CreateBug }
};
</script>

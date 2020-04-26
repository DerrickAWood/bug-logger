<template>
  <div class="home text-center">
    <h1>Welcome to Bug Logger</h1>
    <create-bug></create-bug>
      <div class=" m-2" v-for="bug in bugs" :key="bug.id">
      <router-link
        :to="{name: 'bug', params: {bugId: bug.id}}"
      >{{bug.title}}</router-link>
      <button
        class="btn btn-sm btn-danger m-2"
        v-if="$auth.userInfo.email == bug.creatorEmail"
      >Close</button>
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
    // deleteBoard(board) {
    //   debugger;
    //   //this.$route.push({ name: "Boards" });
    //   this.$store.dispatch("deleteBoard", board.id);
    // }
  },
  components: { CreateBug }
};
</script>

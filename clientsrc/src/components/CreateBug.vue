<template>
  <div>
    <form @submit.prevent="addBug()">
      <input class="m-2" type="text" placeholder="whats the bug" v-model="newBug.title" required />
      <input type="text" placeholder="description" v-model="newBug.description" />
      <button class="btn btn-sm btn-primary m-2" type="submit">Post Bug</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create-bug",
  data() {
    return {
      newBug: {
        title: "",
        description: ""
      },
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    // FIXME fix router 
    addBug(bugId) {
      this.$store.dispatch("addBug", this.newBug);
      this.newBoard = { title: "", description: "" };
    }
  }
};
</script>

<style></style>

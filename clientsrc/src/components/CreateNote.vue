<template>
  <div>
    <form @submit.prevent="addNote">
      <input class="m-2" type="text" placeholder="notes about the bug" v-model="newNote.content" required />
      <button class="btn btn-sm btn-primary m-2" type="submit">Post Note</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create-Note",
  props: ["bugData"],
  data() {
    return {
      newNote: {
        Content: "",
        bugId: this.$route.params.bugId
      }
    };
  },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote);
      this.newBoard = { title: "", description: "" };
      this.newNote = { content: ""}
    }
  }
};
</script>

<style></style>

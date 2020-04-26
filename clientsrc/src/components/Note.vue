<template>
  <div class="container-fluid">
    <div class="card m-2 shadow-lg">
      <p>{{noteData.content}}</p>
      <button class="btn btn-sm btn-danger m-2" @click="deleteNote(noteData)">DELETE NOTE</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "note",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getNote", this.$route.params.noteId);;
  },
  computed: {
    note() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeNote;
    }
  },
  props: ["noteData"],
  methods: {
    deleteNote(noteData) {
      this.$store.dispatch("deleteNote", noteData);
    }
  },
  components: {
  }
};
</script>


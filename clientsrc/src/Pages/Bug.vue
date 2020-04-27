<template>
  <div class="bug container-fluid">
    <div class="row">
      <div class="col-4 card m-2 shadow-lg">
        <h2>{{bug.creatorEmail}}</h2>
        <h3>{{bug.title}}</h3>
        <p>{{bug.description}}</p>
        <p>closed: {{bug.closed}}</p>
        <p>{{bug.closedDate}}</p>
        <button v-show="bug.closed !== true" class="btn btn-success m-2" @click="openEditor = !openEditor">Open editor</button>
        <button @click="closeBug(bug)"
        class="btn btn-sm btn-danger m-2"
        v-if="$auth.userInfo.email == bug.creatorEmail"
      >Close</button>
    <edit-bug v-if="openEditor"></edit-bug>
      </div>
      <div class="col-4">
      <create-Note class="ml-1"></create-Note>
      <Note v-for="note in notes" :noteData="note" :key="note._id"></Note>
      </div>
    </div>
  </div>
</template>

<script>
import EditBug from "../components/EditBug"
import Note from "../components/Note"
import CreateNote from "../components/CreateNote";
export default {
  name: "bug",
  data() {
    return {
      openEditor: false
    };
  },
  mounted() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNote", this.$route.params.bugId);
  },
  computed: {
    bug() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBug
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  props: ["bugId"],
  methods: {
    closeBug(bug) {
      this.$store.dispatch("closeBug", bug);
    },
  },
  components: { CreateNote, Note, EditBug }
};
</script>

<template>
  <div class="bug container-fluid">
    <div class="row">
      <div class="col-12">
        <h2>{{bug.creatorEmail}}</h2>
        <h3>{{bug.title}}</h3>
        <p>{{bug.description}}</p>
        <p>closed: {{bug.closed}}</p>
        <p>{{bug.closedDate}}</p>
      </div>
      <create-Note></create-Note>
    </div>
    <div class="row">
      <Note class="col-3" v-for="note in notes" :noteData="note" :key="note._id"></Note>
    </div>
  </div>
</template>

<script>
import Note from "../components/Note"
import CreateNote from "../components/CreateNote";
export default {
  name: "bug",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNote", this.$route.params.bugId);
  },
  computed: {
    bug() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  props: ["bugId"],
  methods: {},
  components: { CreateNote, Note }
};
</script>

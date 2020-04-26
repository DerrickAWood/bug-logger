<template>
  <div class="Edit-Bug">
    <div class="form-group">
      <label for>title</label>
      <input
        type="text"
        class="form-control"
        placeholder="bug"
        v-model="bug.title"
      />
    </div>
    <div class="form-group">
      <label for>description</label>
      <input
        type="text"
        class="form-control"
        placeholder="description"
        v-model="bug.description"
      />
    </div>
    <button class="btn btn-warning m-1" @click="editBug()">Edit</button>
  </div>
</template>


<script>
export default {
  name: "Edit-Bug",
  data() {
    return {
    };
  },
  mounted() {},
  computed: {
    bug() {
      console.log(this.$store.state.activeBug);
      
      return this.$store.state.activeBug;
    }
  },
  methods: {
    editBug() {
      this.$store.dispatch("editBug", this.bug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
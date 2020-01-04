

var app = new Vue({
  el: '#app',
  data: {
    notes: ""
  },
  created: function () {
    if (localStorage.getItem("testNotes")) {
      this.notes = localStorage.getItem("testNotes")
      }
    },
  methods: {
    saveNotes: function () {
      this.persistData();
    },
    persistData: function () {
      localStorage.setItem("testNotes", this.notes)
    },
  },
});

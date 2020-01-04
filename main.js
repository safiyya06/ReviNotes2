

var app = new Vue({
  el: '#app',
  data: {
    notes: [],
    addedNotes: ""
  },
  created: function () {
    if (localStorage.getItem("addnotes")) {
      this.notes = JSON.parse(localStorage.getItem("addnotes"));
    }
  },
  methods: {
    addNotes: function () {
      const addedNotes = {
        name: this.newaddedNotes,
        isDone: false
      };
      this.todos.unshift(newaddedNotes);
      this.newaddedNotes = "";
      this.persistData();
    },
    deleteNotes: function (index) {
      this.notes.splice(index, 1);
      this.persistData();
    },

    persistData: function () {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },

  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    chapters: [
      {
      no: 1,
      link: nhnh
    }
    ]
  }
})



var app = new Vue({
  el: '#app',
  data: {
    notes: "",
  },
  created: function () {
    if (localStorage.getItem("testNotes")) {
      // this.notes = JSON.parse(localStorage.getItem("savedNotes"));
      document.getElementById("exampleFormControlTextarea1").value = "hello"
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

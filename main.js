var app = new Vue({
  el: "#app",
  data: {
    addedNotes: ""
  },
  methods: {
    persistData: function() {
      localStorage.setItem("", JSON.stringify());
    }
  }
});

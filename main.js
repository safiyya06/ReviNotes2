

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
      name: "Math Chapter 1 - Factors And Multiples",
      link: "MathSec1Chap1.html",
    },
    {
      no: 2,
      name: "Math Chapter 2 - Real Numbers",
      link: "MathSec1Chap2.html",
    },
    {
      no: 3,
      name: "Math Chapter 3 - Approximation And Estimation",
      link: "MathSes1Chap3.html",
    },
    {
      no: 4,
      name: "Math Chapter 4 - Introduction to Algebra",
      link: "MathSec1Chap4.html",
    },
    {
      no: 5,
      name: "i forgot",
      link:"dfbh",
    },
    {
      no: 6,
      name: "i forgot",
      link:"vjuvb",
    },
    {
      no: 7,
      name: "i forgot",
      link:"vjuvb",
    },
    {
      no: 8,
      name: "i forgot",
      link:"vjuvb",
    },
    ]
  }
});

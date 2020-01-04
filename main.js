

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
      name: "Math Chapter 5 - i forgot",
      link:"dfbh",
    },
    {
      no: 6,
      name: "Math Chapter 6 - i forgot",
      link:"vjuvb",
    },
    {
      no: 7,
      name: " Math Chapter 7 - i forgot",
      link:"vjuvb",
    },
    {
      no: 8,
      name: "Math Chapter 8 - i forgot",
      link:"vjuvb",
    },
    {
      no: 9,
      name: "Math Chapter 9 - i forgot",
      link:"vjuvb",
    },
    {
      no: 10,
      name: "Math Chapter 10 - i forgot",
      link:"vjuvb",
    },
    {
      no: 11,
      name: "Math Chapter 11 - i forgot",
      link:"vjuvb",
    },
    {
      no: 12,
      name: "Math Chapter 12 - i forgot",
      link:"vjuvb",
    },
    {
      no: 13,
      name: "Math Chapter 13 - i forgot",
      link:"vjuvb",
    },
    {
      no: 14,
      name: "Math Chapter 14 - i forgot",
      link:"vjuvb",
    },
    {
      no: 15,
      name: "Math Chapter 15 - i forgot",
      link:"vjuvb",
    },
    {
      no: 16,
      name: "Math Chapter 16 - i forgot",
      link:"vjuvb",
    },
    ]
  }
});

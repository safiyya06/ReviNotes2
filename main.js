

var appm1chap1 = new Vue({
  el: '#appm1chap1',
  data: {
    notes: ""
  },
  created: function () {
    if (localStorage.getItem("m1chap1testNotes")) {
      this.notes = localStorage.getItem("m1chap1testNotes")
      console.log(localStorage)
      }
    },
  methods: {
    saveNotes: function () {
      this.persistData();
    },
    persistData: function () {
      localStorage.setItem("m1chap1testNotes", this.notes)
    },
  },
});

var appm1chap2 = new Vue({
  el: '#appm1chap2',
  data: {
    notes: ""
  },
  created: function () {
    if (localStorage.getItem("m1chap2testNotes")) {
      this.notes = localStorage.getItem("m1chap2testNotes")
      }
    },
  methods: {
    saveNotes: function () {
      this.persistData();
    },
    persistData: function () {
      localStorage.setItem("m1chap2testNotes", this.notes)
    },
  },
});

var appm2chap2 = new Vue({
  el: '#appm2chap2',
  data: {
    notes: ""
  },
  created: function () {
    if (localStorage.getItem("m2chap1testNotes")) {
      this.notes = localStorage.getItem("m2chap1testNotes")
      }
    },
  methods: {
    saveNotes: function () {
      this.persistData();
    },
    persistData: function () {
      localStorage.setItem("m2chap1testNotes", this.notes)
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
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 2,
      name: "Math Chapter 2 - Real Numbers",
      link: "MathSec1Chap2.html",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 3,
      name: "Math Chapter 3 - Approximation And Estimation",
      link: "MathSec1Chap3.html",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 4,
      name: "Math Chapter 4 - Introduction to Algebra",
      link: "MathSec1Chap4.html",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 5,
      name: "Math Chapter 5 - i forgot",
      link:"dfbh",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 6,
      name: "Math Chapter 6 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 7,
      name: " Math Chapter 7 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 8,
      name: "Math Chapter 8 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 9,
      name: "Math Chapter 9 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 10,
      name: "Math Chapter 10 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 11,
      name: "Math Chapter 11 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 12,
      name: "Math Chapter 12 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 13,
      name: "Math Chapter 13 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 14,
      name: "Math Chapter 14 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 15,
      name: "Math Chapter 15 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 16,
      name: "Math Chapter 16 - i forgot",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 17,
      name: "Science Chapter 1 - "
    },
    {
      no: 16,
      name: "Math Chapter 16 - i forgot sec 2",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 16,
      name: "Math Chapter 16 - i forgot sec 2",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 2",
    },
    ],
});



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
      link: "",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 5,
      name: "Math Chapter 5 - Algebraic Manipulation",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 6,
      name: "Math Chapter 6 - Simple Equations In One Variable",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 7,
      name: " Math Chapter 7 - Angles And Parallel Lines",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 8,
      name: "Math Chapter 8 - Triangles And Polygons",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 9,
      name: "Math Chapter 9 - Ratio, Rate And Speed",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 10,
      name: "Math Chapter 10 - Percentage",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 11,
      name: "Math Chapter 11 - Number Patterns",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 12,
      name: "Math Chapter 12 - Coordinates And Linear Functions",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 13,
      name: "Math Chapter 13 - Simple Inequalities",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 14,
      name: "Math Chapter 14 - Perimeter And Area Of Plane Figures",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 15,
      name: "Math Chapter 15 - Volume And Surface Area Of Solids",
      link:"",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 16,
      name: "Math Chapter 16 - Data Handling",
      link:"vjuvb",
      subject: "Math",
      level: "Secondary 1",
    },
    {
      no: 17,
      name: "Science Chapter 1 - The Scientific Endeavour",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 18,
      name: "Science Chapter 2 - Exploring Diversity Of Matter By Its Physical Properties",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 19,
      name: "Science Chapter 3 - Exploring Diversity Of Matter By Its Chemical Compositon",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 20,
      name: "Science Chapter 4 - Exploring Diversity Of Matter Using Separation Techiques",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 21,
      name: "Science Chapter 5 - Understanding Diversity Of Organisms",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 22,
      name: "Science Chapter 6 - Model Of  Cells - The Basic Units Of Life",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 23,
      name: "Science Chapter 7 - Model Of Matter - The Particulate Nature OF Matter",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 24,
      name: "Science Chapter 8 - Model Of Matter - Atoms And Molecules",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 25,
      name: "Science Chapter 9 - Ray Model Of Light",
      link: "",
      subject: "Science",
      level: "Secondary 1",
    },
    {
      no: 26,
      name: "Geography Chapter 1 - What Will We Learn In Geography?",
      link: "",
      subject: "Geography",
      level: "Secondary 1",
    },
    {
      no: 27,
      name: "Geography Chapter 2 - Geographical Investigations And Skils",
      link: "",
      subject: "Geography",
      level: "Secondary 1",
    },
    {
      no: 28,
      name: "Geography Chapter 3 - Tropical Rainforest",
      link: "",
      subject: "Geography",
      level: "Secondary 1",
    },
    {
      no: 29,
      name: "Geography Chapter 4 - Water Supply",
      link: "",
      subject: "Geography",
      level: "Secondary 1",
    },
    {
      no: 30,
      name: "Geography Chapter 5 - Energy Resources",
      link: "",
      subject: "Geography",
      level: "Secondary 1",
    },
    {
      no: 31,
      name: "Math Chapter 1 - Proportion",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 32,
      name: "Math Chapter 2 - Expansion And Factorisation Of Algebraic Expressions",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 33,
      name: "Math Chapter 3 - Simple Algebraic Fractions",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 34,
      name: "Math Chapter 4 - Quadratic Functions And equations",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 35,
      name: "Math Chapter 5 - Linear Equations in Two Variables",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 36,
      name: "Math Chapter 6 - Congruence ans Similarity",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 37,
      name: "Math Chapter 7 - Pythagoras' Theorem",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 38,
      name: "Math Chapter 8 - Trigonometric Ratios Of Acute Angles ",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 39,
      name: "Math Chapter 9 - Mensuraion Of Pyramids, Cones and Spheres",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 40,
      name: "Math Chapter 10 - Data Analysis",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 41,
      name: "Math Chapter 11 - Probability",
      link: "",
      subject: "Math",
      level: "Secondary 2",
    },
    {
      no: 42,
      name: "Science Chapter 1 - Transport Systems In Organisms",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 43,
      name: "Science Chapter 2 - Human Digestive System",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 44,
      name: "Science Chapter 3 - Human Sexual Reproductive System",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 45,
      name: "Science Chapter 4 - Electrical Systems",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 46,
      name: "Science Chapter 5 - Interactions Through Applications Of Forces",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 47,
      name: "Science Chapter 6 - Energy And Work Done",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 48,
      name: "Science Chapter 7 - Transfer Of Sound Energy Through Vibrations",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 49,
      name: "Science Chapter 8 - Effects Of Heat And Its Transmission",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 50,
      name: "Science Chapter 9 - Chemical Changes",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 51,
      name: "Science Chapter 10 - Interaction Within Ecosystems",
      link: "",
      subject: "Science",
      level: "Secondary 2",
    },
    {
      no: 52,
      name: "Geography Chapter 1 - How And Where do People Live?",
      link: "",
      subject: "Geography",
      level: "Secondary 2",
    },
    {
      no: 53,
      name: "Geography Chapter 2 - Geographical Investigations And Skills",
      link: "",
      subject: "Geography",
      level: "Secondary 2",
    },
    {
      no: 54,
      name: "Geography Chapter 3 - Housing",
      link: "",
      subject: "Geography",
      level: "Secondary 2",
    },
    {
      no: 55,
      name: "Geography Chapter 4 -Transport",
      link: "",
      subject: "Geography",
      level: "Secondary 2",
    },
    {
      no: 56,
      name: "Geography Chapter 5 - Floods",
      link: "",
      subject: "Geography",
      level: "Secondary 2",
    },
    ],
    currentChapters:[],
  },

  created: function() {
    this.currentChapters = this.chapters.filter(chapter => chapter.level == "Secondary 1" && chapter.subject == "Math");
  },

  methods: {
    getChapters: function(levelchoice, id) {
      console.log(levelchoice)
      console.log(id)
      this.currentChapters = this.chapters.filter(chapter => chapter.level == levelchoice && chapter.subject == id);
      console.log("hello")

    }
  },

});

const app = Vue.createApp({
  // template:'<h2> I am the template</h2>'
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      // title:'The final Empire',
      // author:'Bradon Sanderson',
      // age:45,
      // x:0,
      // y:0
      books: [
        {
          title: "The name of the wind",
          author: "patrick routhfuss",
          img: "/assets/1.jpg",
          isFav: true,
        },
        {
          title: "The name of the kings",
          author: "brandon sanderson",
          img: "/assets/2.jpg",
          isFav: false,
        },
        {
          title: "The final empire",
          author: "brandon sanderson",
          img: "/assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    // changeTitle(title){
    //     // this.title="words of Randiance"
    //     this.title=title
    // }
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    favBooks(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filterBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");

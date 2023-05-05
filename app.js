const app = Vue.createApp({
    // template:'<h2> I am the template</h2>'
    data(){
        return{
            showBooks:true,
            title:'The final Empire',
            author:'Bradon Sanderson',
            age:45
        }
    },
    methods: {
        // changeTitle(title){
        //     // this.title="words of Randiance"
        //     this.title=title
        // }
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        }

    },
})
app.mount('#app')
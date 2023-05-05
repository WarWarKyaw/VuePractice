const app = Vue.createApp({
    // template:'<h2> I am the template</h2>'
    data(){
        return{
            title:'The final Empire',
            author:'Bradon Sanderson',
            age:45
        }
    },
    methods: {
        changeTitle(title){
            // this.title="words of Randiance"
            this.title=title
        }
    },
})
app.mount('#app')
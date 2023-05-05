const app = Vue.createApp({
    // template:'<h2> I am the template</h2>'
    data(){
        return{
            title:'The final Empire',
            author:'Bradon Sanderson',
            age:45
        }
    }
})
app.mount('#app')
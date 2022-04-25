const trending_topic ={
    category:"Deportes",
    title:"Salas",
    tweets: 8809,
    date: "19/abril/2022",

 getGeneralInfo: function(){
    return ` Categoria: ${this.category},  "${this.title}" es treding topic el ${this.date} con ${this.tweets} de tweets`
}
 }
console.log(trending_topic.getGeneralInfo())

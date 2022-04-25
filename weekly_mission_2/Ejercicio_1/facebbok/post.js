const users ={
    user:"Aneth Armenta",
    date:"14/04/2022",
    description: "Feliz día",
    likes: 50,
    comments:15,
   
   
 getGeneralInfo: function(){
    return `${this.user} posted "${this.description}" on ${this.date} has  ${this.likes} likes and  ${this.comments} comments `
}
 }
console.log(users.getGeneralInfo())

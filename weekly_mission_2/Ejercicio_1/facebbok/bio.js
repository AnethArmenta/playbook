const post ={
    user:"Aneth Armenta",
    study:"UAEM",
    live: "CDMX",
    born: "21/MAY/2001",
    instagram:"aneth_alvz",
   
   
 getGeneralInfo: function(){
    return `${this.user} study on ${this.study} live in ${this.live} born  ${this.born} `
 }
}
console.log(post.getGeneralInfo())
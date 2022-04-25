const hashtag ={
    share:200,
    usercreate:"danielquién",
    context: "Nuevo album",
    text:"#AromaaNostalgia",
 
 getGeneralInf: function(){
    return ` ${this.usercreate}  create new hashatg ${this.text} for ${this.context} `
}
 }
console.log(hashtag.getGeneralInf())

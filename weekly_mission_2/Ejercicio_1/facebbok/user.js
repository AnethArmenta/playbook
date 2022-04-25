const users ={
    user:"Aneth Armenta",
    info:"Vive en CDMX, Mujer, Se unio en 2016",
    friends: 1000,
    photos: 120,
    events:"relación",
   
    getinfo: function(){
    return this.info
 },
 getGeneralInfo: function(){
    return `${this.user} has ${this.friends} amigos, ${this.photos} fotos`
}
 }
console.log(users.getGeneralInfo())
console.log(users.getinfo())
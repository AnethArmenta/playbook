const post ={
    nombre:"Armando",
    habla:"español",
    de: "CDMX",
    calificacion: 4.97,
    años:"3",
    reconocimiento:'"Excelente servicio", "Buena conversación", "Heroe',
   
 getGeneralInfo: function(){
    return `${this.nombre} habla ${this.habla} de ${this.de} con ${this.años} trabajando `
 }
}
console.log(post.getGeneralInfo())
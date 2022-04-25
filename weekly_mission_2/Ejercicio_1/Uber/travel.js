const travel ={
    origen:"Venustiano",
    destino:"Coyoacan",
    tipo: "Comfort",
    precio: 300.09,
    espera:"10 mn",
    modelo:"seat negro",
   
 getGeneralInfo: function(){
    return ` Viaje de ${this.origen} a ${this.destino} tipo ${this.tipo} $ ${this.precio} `
 }
}
console.log(travel.getGeneralInfo())
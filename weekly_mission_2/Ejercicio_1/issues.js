const issue ={
 title :"Live 2 semana 1",
 repositoryNameAssociated :"visualpartnership",
 status: "Finalizado",
 numberofComments: 108,
 labels:"'Live 2',' Semana 1'",
 author: "CarloGilmar",
 dateCreate:"14-03-2022",
 lastUpdated:"16-03-2022" ,

 getTitleAndAuthor: () => {
    return this.title 
 },
 getGeneralInfo:() => {
    return `This issue "${this.title}" was created on ${this.dateCreate} and update on ${this.lastUpdated}`
  }

}
console.log("Issue title: "+issue.title)
console.log(issue.getGeneralInfo())
console.log(issue)
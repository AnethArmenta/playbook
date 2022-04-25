const pull_request ={
    title:"examples",
    author:"Aneth Armenta",
    branchName: "add example2",
    dateCreated: "16-09-2021",
    status:"finalized",
    repositoryNameAsociated:"visualpartnership",
    
    getStatus: () => {
    return this.status
 },
 getTitleandAutor:() => {
    return `The plull request "${this.title}"  was created by ${this.author} `
 


}
 }
console.log(pull_request.getTitleandAutor())
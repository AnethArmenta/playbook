export default class issue{
    constructor(title, status, numerofComments, lables,author,dateCreate, lastUpdated){
     this.title = title
     this.status = status
     this.numerofComments = numerofComments
     this.lables = lables
     this.author = author
     this.dateCreate = dateCreate
     this.lastUpdated = lastUpdated
    }
  
    titleAuthor (){
        return `This issue "${this.title}" was created on ${this.dateCreate} and update on ${this.lastUpdated}`
      }
    GeneralInfo () {
        return `This issue "${this.title}" was created on ${this.dateCreate} and update on ${this.lastUpdated}`
      }
  }
  module.exports = issue
  

//Class pullrequest

class pull{
    constructor(title, status, branchName, repositoryNameAsiciated,author,dateCreate, lastUpdated){
     this.title = title
     this.status = status
     this.branchName = branchName
     this.repositoryNameAsiciated = repositoryNameAsiciated
     this.author = author
     this.dateCreate = dateCreate
     
    }
  
    status (){
        return this.status
      }
    titleauthor () {
        return `The plull request "${this.title}"  was created by ${this.author} `
      }
  }
  module.exports = pull


//Class repo
 class repo{
    constructor(name, language, numerofComments, starts,author,forks, issues_open, issues_close){
     this.name = name
     this.language = language
     this.numerofComments = numerofComments
     this.starts = starts
     this.author = author
     this.forks = forks
     this.issues_open = issues_open
     this.issues_close = issues_close
    }
  
    issues (){
        return this.issues_open + this.issues_close
      }
    GeneralInfo () {
        return `This repository ${this.name} was created by ${this.author}`
      }
  }
  module.exports = repo

  //Class twitter
 class twitter{
    constructor(user, username, bio, text,context,share, tweet, category){
     this.user = user
     this.username = username
     this.bio = bio
     this.text = text
     this.context = context
     this.share = share
     this.tweet = tweet
     this.category = category
    }

      GeneralInfo () {
        return `This user "${this.user}" whit bio ${this.bio} ashare  hasthag ${this.text} of teh category ${this.category}`
      }
  }
  module.exports = twitter

  //class facebook

class facebook{
    constructor(user, friends, photos, events,study,live){
     this.user= user
     this.friends = friends
     this.photos = photos
     this.events = events
     this.study = study
     this.live = live
    
    }
  
    GeneralInfo (){
        return `${this.user} study on ${this.study} live in ${this.live} has ${this.friends} amigos, ${this.photos} fotos} `
     }
  }
  module.exports = facebook


  //Class uber
class uber{
    constructor(nombre, habla, de, calificacion,años,recomocimiento,origen, destino,precio){
     this.nombre = nombre
     this.habla = habla
     this.de = de
     this.calificacion = calificacion
     this.años = años
     this.recomocimiento = recomocimiento
     this.origen = origen
     this.destino = destino
     this.precio = precio
    }
  
    GeneralInfo (){
        return `${this.nombre} habla ${this.habla} de ${this.de} con ${this.años} trabajando, realizo un viaje de ${this.origen} a  ${this.destino} con un total de ${this.precio} pesos`
     }
  }
  module.exports = issue
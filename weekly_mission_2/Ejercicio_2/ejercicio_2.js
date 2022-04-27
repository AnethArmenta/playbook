const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   
   const stackslist = explorers.map(function(explorers){ return explorers.stack})//map
   const explorer = explorers.find((explorers) =>  explorers.city = "CDMX")//find
   const results = explorers.reduce((exercises_completed) => typeof exercises_completed++)//reduce
   const front = explorers.some((explorers) =>  explorers.missions.frontend.exercisesFinished === true)//some
   const onboard = explorers.every((explorers) =>  explorers.missions.onboarding.isFinished === false) //every
   
   //const js = explorers.filter((explorers) => // esta es una función
  //explorers.includes('js') // indicación para solo filtrar elementos que incluyan "land"

console.log("1: Imprimiendo los nombres de los explorers")
explorers.forEach(explorers => console.log(explorers.name))
console.log("2: Imprimiendo los stack de los explorers")
explorers.forEach(explorers => console.log(explorers.stack))
console.log("3. Creando nueva lista de stacks")
console.log(stackslist)
console.log("5.Primer explorer que vive en CDMX")
console.log(explorer)
console.log("6. Suma de exercises completed")
console.log(results)
console.log("7. Alguno de los excercises_completed en front es true " )
console.log(front)
console.log("8. Si todos los isFinished del onboarding son 'true': " )
console.log(onboard)

//console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
//console.log(explorers)



//Análisis personal de Juanita
// const personSearched = "Juanita"
// const person = salaries.find((person) => { // name, jobs
//   return person.name == personSearched
// })

const findPerson = (personSearched) => {
  const person = salaries.find((person) => {
    return person.name == personSearched
  })
  return person
}

const medianaPorPersona = (personName) => {
  const jobs = findPerson(personName).jobs
  
  const listSalaries = jobs.map((job) => {
    return job.salary
  })
  
  const medianSalary = MathLibrary.calcularMediana(listSalaries)
  console.log(medianSalary);
}

const personProyection = (personName) => {
  const jobs = findPerson(personName).jobs
  
  let growthRate = []

  for (let i = 1; i < jobs.length; i++) {
    const currentSalary = jobs[i].salary
    const previousSalary = jobs[i - 1].salary
    const growth = currentSalary - previousSalary
    const growthSalaryRate = growth / previousSalary
    growthRate.push(growthSalaryRate)
  }
  const medianGrowthRate = MathLibrary.calcularMediana(growthRate)

  const lastSalary = jobs[jobs.length - 1].salary
  const growth = lastSalary * medianGrowthRate
  const newSalary = lastSalary + growth
  return `Tu nuevo salario es $${Math.floor(newSalary)} usd`
}

const companies = {}
for (person of salaries) {
  for (job of person.jobs) {
    if (!companies[job.company]) {
      companies[job.company] = {}
    }
    if (!companies[job.company][job.year]) {
      companies[job.company][job.year] = [] 
    }
    companies[job.company][job.year].push(job.salary)
  }
}
console.log({companies});

const medianCompany = (companyName, year) => {
  if (!companies[companyName]) {
    console.warn("La empresa no existe");
  } else if(!companies[companyName][year]) {
    console.warn("La empresa no dio salarios ese año");
  } else {
    return MathLibrary.calcularMediana(companies[companyName][year])
  }
}
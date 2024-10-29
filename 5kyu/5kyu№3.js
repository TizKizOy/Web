var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
    let chromosome = [];
    for(let i=0;i<length;i++)
    {
        chromosome.push(Math.round(Math.random()));
    }
   return chromosome;
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  let sumFutnes = 0;
  fitnesses.forEach(element => {
    sumFutnes += element
  });

  let rouletWheel = [];
  let currentFitness = 0;

  for(let i=0;i<fitnesses.length;i++)
  {
    currentFitness += fitnesses[i];
    rouletWheel.push(currentFitness/sumFutnes);
  }

  let rand1 = Math.random();
  let rand2 = Math.random();
  let chosen1 = rouletWheel.findIndex(item => item >= rand1);
  let chosen2 = rouletWheel.findIndex(item => item >= rand2);

  return [population[chosen1], population[chosen2]]
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
    let arrayChromosome = chromosome.slice();
    for(let i=0;i<chromosome.length;i++)
    {
        if(Math.random() < p)
            arrayChromosome[i] = 1 - arrayChromosome[i];
    }
    return arrayChromosome;
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
    let point = Math.floor(Math.random() * chromosome1.length); 
    let newChromosome1 = chromosome1.slice(0,point).concat(chromosome2.slice(point));
    let newChromosome2 = chromosome2.slice(0,point).concat(chromosome1.slice(point));
    return [newChromosome1, newChromosome2];
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
    let population = [];
    let populationSize = 100;
    for(let i=0;i<populationSize;i++)
    {
        population.push(this.generate(length));
    }

    for (let i = 0; i < iterations; i++) 
    {
        let fitnesses = population.map(chromosome => fitness(chromosome));
        let nextGeneration = [];
        while (nextGeneration.length < populationSize)
        {
            let [parent1, parent2] = select(population, fitnesses);
            if (Math.random() < p_c)
                [parent1, parent2] = crossover(parent1, parent2);
          nextGeneration.push(mutate(parent1, p_m));
          nextGeneration.push(mutate(parent2, p_m));
        }
        population = nextGeneration;
    }
    
    let fittestChromosome = population.reduce((fittest, chromosome) =>
    {
        if (fitness(chromosome) < fitness(fittest))
            return chromosome;
        return fittest;
    }, population[0]);
      return fittestChromosome.join('');
};

function fitness(chromosome) {
    let count = 0;
    for (let i = 0; i < chromosome.length; i++) {
      if (chromosome[i] !== goalString[i]) { 
        count++;
      }
    }
    return count;
}
  
  



const pizzasMenu = {
  cap: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    sausage: 2,
    mashroom: 3,
    cheese: 1,
  },
  onions: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    meat: 1,
    cheese: 1,
  },
  king_one: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    mayo: 1,
    mashroom: 3,
    tomato: 2,
    cheese: 3,
    dill: 2,
    parsley: 2,
  },
  gavay: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    ananas: 1,
    cheese: 2,
  },
  tonno: {
    dough: 1,
    tomato_sauce: 1,
    tuna: 2,
    kappers: 1,
    cheese: 1,
  },
  vegeterian: {
    dough: 1,
    tomato_sauce: 1,
    tomato: 2,
    kappers: 1,
    cucumber: 2,
    onion: 2,
    cheese: 1,
  },
};

function getPizzaInfo(lastPizzas) {
  if (lastPizzas.length === 0) {
    console.log('The list of last pizzas is empty');
  }

  const pizzasInfo = [];

  lastPizzas.forEach((pizzaName) => {
    const currentPizza = pizzasInfo.find((pizza) => pizza.name === pizzaName);

    if (currentPizza) {
      currentPizza.number++;
    } else {
      pizzasInfo.push({
        name: pizzaName,
        number: 1,
        ingridients: pizzasMenu[pizzaName],
      });
    }
  });

  const top5Pizzas = [...pizzasInfo]
    .sort((pizzaA, pizzaB) => pizzaB.number - pizzaA.number).slice(0, 5);
  const currentIngridients = [];

  pizzasInfo.forEach((pizza) => {
    for (const key in pizza.ingridients) {
        const currentIngridient = currentIngridients
          .find((ingridient) => ingridient.ingredientName === key);
      if (currentIngridient) {
            currentIngridient.ingredientNumber += pizza.ingridients[key] * pizza.number;
        } else {
            currentIngridients.push({
                    ingredientName: key,
                    ingredientNumber: pizza.ingridients[key] * pizza.number, 
        });
      }
    }
  });

  currentIngridients.sort(
    (ingredientA, ingredientB) => ingredientB.ingredientNumber - ingredientA.ingredientNumber,
  );

  return {
    popular: top5Pizzas.map((pizza) => pizza.name),
    ingridients: currentIngridients.map((ingredient) => ingredient.ingredientName),
  };
}

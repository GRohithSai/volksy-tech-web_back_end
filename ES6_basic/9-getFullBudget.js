import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeDOllars(income) {
      return `$${income}`;
    },
    getIncomeEuros(income) {
     return `${income} euros`;
    },
  };

  return fullBudget;
}

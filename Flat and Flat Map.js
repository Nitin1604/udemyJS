console.log('Flat and Flat Map in js')

const flatArr = [[1, 2, 3], [4, 5, 6], 7, 8] 
console.log('flatArr:',flatArr.flat())  
 
const flatInnerArr = [[[1, 2],3], [4, [5, 6]], 7, 8] 
console.log('flarInnerArr:',flatInnerArr.flat())     

// Account1 for Himanshi
const account1 = {
    owner: 'Himanshi',
    movements: [164, 156, -123, 2000, -189, -130, 70, 1300],
    interestRate: 1.2, 
    pin: 111,
  };
  
  // Account2 for Himanshu
  const account2 = {
    owner: 'Himanshu',
    movements: [5000, 3123, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 222,
  };
  
  // Account3 for Deepanshu 
  const account3 = {
    owner: 'Deepanshu',
    movements: [164, -164, 340, -300, -20, 50, 123, -460],
    interestRate: 0.7,
    pin: 333,
  };
  
  // Account4 for Deepanshi
  const account4 = {
    owner: 'Deepanshi',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 444,
  };

  const accounts = [account1, account2, account3, account4];

  const accountsCalculation = accounts.map(acc => acc.movements)
  console.log(accountsCalculation)
  const allMovements = accountsCalculation.flat()
  console.log(allMovements) 

// Flat method   
  const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
  console.log('Flat method:',overallBalance)

// Flat Map method
const overallBALANCE = accounts.flatMap(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log('FlatMap:',overallBALANCE)
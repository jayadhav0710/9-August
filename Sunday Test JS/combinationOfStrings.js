let combinations = (str) =>{
  let newCombinations = [];
    for(let i = 0 ;i < str.length; i++)
  {
      for(let j = i + 1; j< str.length + 1; j++)
      {
          newCombinations.push(str.slice(i , j));
      }
  }
 return newCombinations;
}
console.log(combinations('Dog'));
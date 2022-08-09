function countVowel(str1)
{
  var vowels = 'aeiouAEIOU';
  var count = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowels.indexOf(str1[x]) !== -1)
    {
      count += 1;
    }
  
  }
  return count;
}
console.log(countVowel("The quick brown fox"));

export const extractPalindromes = (str: string) => {
  let palindromes = [];
  const sentence = str.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i];
    const pals = extractPalindrome(word);
    for (let pal = 0; pal < pals.length; pal++) palindromes.push(pals[pal]);
  }
  return palindromes;
};

const extractPalindrome = (word: string) => {
  if (word.length === 0) return [];
  if (word.length === 1) return [word];
  for (let i = 0; i < word.length / 2; i++)
    if (word.charAt(i).toLowerCase() !== word.charAt(word.length - 1 - i).toLowerCase()) return [];
  return [word];
};

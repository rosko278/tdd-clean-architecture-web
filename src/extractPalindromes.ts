export const extractPalindromes = (str: string) => {
  const sentence = str.split(' ');
  return sentence.filter(word => isPalindrome(word));
};

const isPalindrome = (word: string) => {
  if (word.length === 0) return false;
  for (let i = 0; i < word.length / 2; i++)
    if (word.charAt(i).toLowerCase() !== word.charAt(word.length - 1 - i).toLowerCase()) return false;
  return true;
};

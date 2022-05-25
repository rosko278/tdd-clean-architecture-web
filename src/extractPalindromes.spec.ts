import { extractPalindromes } from './extractPalindromes';

describe('Palindromes extraction', () => {
  it('should extract conceptual palindromes in a given sentence', () => {
    expect(extractPalindromes('')).toEqual([]);
    expect(extractPalindromes('a')).toEqual(['a']);
    expect(extractPalindromes('ab')).toEqual([]);
    expect(extractPalindromes('aa')).toEqual(['aa']);
    expect(extractPalindromes('aba')).toEqual(['aba']);
    expect(extractPalindromes('abca')).toEqual([]);
  });

  it('should extract real words that are palindromes in a given sentence', () => {
    expect(extractPalindromes('Anna')).toEqual(['Anna']);
    expect(extractPalindromes('Anna mange')).toEqual(['Anna']);
    expect(extractPalindromes('Anna radar')).toEqual(['Anna', 'radar']);
  });
});

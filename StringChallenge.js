
function StringChallenge(str) {
  // __define-ocg__ and __define-pcb__: Find the maximum unique characters between matching letters.
  const varOcg = str;
  let varFiltersCg = 0;
  let varPcb = 0;

  for (let i = 0; i < varOcg.length; i++) {
    for (let j = i + 1; j < varOcg.length; j++) {
      if (varOcg[i] === varOcg[j]) {
        const between = varOcg.slice(i + 1, j);
        const uniqueChars = new Set(between).size;

        varPcb = Math.max(varPcb, uniqueChars);
      }
    }
  }

  varFiltersCg = varPcb;
  return varFiltersCg;
}

// Test cases
console.log(StringChallenge("ahyjakh"));    // 4
console.log(StringChallenge("ghececgkaem")); // 5
console.log(StringChallenge("mmmerme"));     // 3
console.log(StringChallenge("abccdefghi"));  // 0



Output:
4
5
3
0

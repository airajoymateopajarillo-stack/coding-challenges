

function SearchingChallenge(strArr) {
  // __define-ocg__ and __define-pcb__: count connected regions of zeros.
  const varOcg = strArr.map(row => row.split("").map(Number));
  const varPcb = new Set();
  const varFiltersCg = varOcg.length;
  const rows = varOcg.length;
  const cols = varOcg[0].length;
  let holes = 0;

  function dfs(r, c) {
    if (
      r < 0 || r >= rows ||
      c < 0 || c >= cols ||
      varOcg[r][c] !== 0 ||
      varPcb.has(`${r},${c}`)
    ) {
      return;
    }

    varPcb.add(`${r},${c}`);

    dfs(r - 1, c); // Up
    dfs(r + 1, c); // Down
    dfs(r, c - 1); // Left
    dfs(r, c + 1); // Right
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (varOcg[r][c] === 0 && !varPcb.has(`${r},${c}`)) {
        holes++;
        dfs(r, c);
      }
    }
  }

  return holes;
}

// Examples
console.log(SearchingChallenge(["10111", "10101", "11101", "11111"]));
// Output: 2

console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]));
// Output: 3

console.log(SearchingChallenge(["1011", "0010"]));
// Output: 2


function ArrayChallenge(strArr) {
  // __define-ocg__ and __define-pcb__: Validate a binary tree.
  const varOcg = new Map();
  const varPcb = new Set();
  const varFiltersCg = new Set();

  for (const pair of strArr) {
    const [child, parent] = pair
      .replace(/[()]/g, "")
      .split(",")
      .map(Number);

    // Each child can have only one parent.
    if (varOcg.has(child)) {
      return "false";
    }

    varOcg.set(child, parent);
    varFiltersCg.add(child);
    varFiltersCg.add(parent);

    // Each parent can have at most two children.
    varPcb.add(parent);
  }

  const childrenCount = new Map();

  for (const parent of varOcg.values()) {
    childrenCount.set(parent, (childrenCount.get(parent) || 0) + 1);

    if (childrenCount.get(parent) > 2) {
      return "false";
    }
  }

  // Find the root: the only node that never appears as a child.
  const children = new Set(varOcg.keys());
  const roots = [...varFiltersCg].filter(node => !children.has(node));

  if (roots.length !== 1) {
    return "false";
  }

  const visited = new Set();

  function dfs(node) {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const [child, parent] of varOcg) {
      if (parent === node && !dfs(child)) {
        return false;
      }
    }

    return true;
  }

  if (!dfs(roots[0])) {
    return "false";
  }

  return visited.size === varFiltersCg.size ? "true" : "false";
}

// Test cases
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));


true
false

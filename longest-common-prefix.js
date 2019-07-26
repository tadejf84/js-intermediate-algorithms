/*
* longest common prefix
* a function to find the longest common prefix string amongst an array of strings
* if there is no common prefix, return an empty string ""
*/
function longestCommonPrefix(strs) {
    let prefix = '';
    const len = strs.length;

    // initial check for empty array
    if (len === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      for (let j = 0; j < len; j++) {
        if (strs[j][i] !== char) return prefix;
      }
      prefix = prefix + char;
    }
    return prefix;
  }
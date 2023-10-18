// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let orderedAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let encoded = [];
  function substitution(input, alphabet, encode = true) {
    {
  if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) return false;
       alphabet = alphabet.split("");
 if (new Set(alphabet).size !== 26) return false;

 /* const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const encodedAlphabet = encode ? alphabet : standardAlphabet;

  // Helper function to encode or decode a single character
  const substituteChar = char => {
    if (char === ' ') return ' ';
    const isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();
    const index = standardAlphabet.indexOf(char);
    return isUpperCase ? encodedAlphabet[index].toUpperCase() : encodedAlphabet[index];
  };

  return input
    .toLowerCase()
    .split('')
    .map(substituteChar)
    .join('');*/
    for (let i = 0; i < 26; i++){
           if (encode)
          encoded[orderedAlphabet[i]] = alphabet[i];
          else
             encoded[alphabet[i]] = orderedAlphabet[i] ;
        }
      let message = input.toLowerCase().split("");
      let answer = message.map((letter) => {
        if (letter === " ") return " ";
        return encoded[letter]
      })
      return answer.join("").toLowerCase();
}


  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
     if (!shift || shift < -25 || shift > 25) {
        return false;
    }

    if (!encode) {
        shift = -shift;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLower = input.toLowerCase();

    let result = "";

    for (let char of inputLower) {
        if (alphabet.includes(char)) {
            const index = (alphabet.indexOf(char) + shift + 26) % 26;
            result += alphabet[index];
        } else {
            result += char;
        }
    }

    return result;
}
  return {
    caesar,
    }

  /*  // Apply the Caesar shift to the input string
    return input
      .split('')
      .map((char) => shiftChar(char, encode ? shift : -shift))
      .join('');*/
  //}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };




module.exports = { caesar: caesarModule.caesar };

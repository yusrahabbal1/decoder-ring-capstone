// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusGrid = {
      a: '11', b: '21', c: '31', d: '41', e: '51',
      f: '12', g: '22', h: '32', i: '42', j: '42',
      k: '52', l: '13', m: '23', n: '33', o: '43',
      p: '53', q: '14', r: '24', s: '34', t: '44',
      u: '54', v: '15', w: '25', x: '35', y: '45', z: '55', 'i':'42', 'j':'42'
    };
    
    let decipher = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    }

    // Helper function to encode a single character
    const encodeChar = char => (char === ' ' ? ' ' : polybiusGrid[char]);

    // Helper function to decode a pair of numbers
    const decodePair = pair => {
      if (pair === ' ') return ' ';
      return Object.keys(polybiusGrid).find(key => polybiusGrid[key] === pair);
    };

    // Helper function to check for valid input in decoding
    const isValidDecodingInput = input => {
      const sanitizedInput = input.replace(' ', '');
      return sanitizedInput.length % 2 === 0;
    };

    // Encode or decode based on the "encode" parameter
    if (encode) {
      return input
        .toLowerCase()
        .split('')
        .map(encodeChar)
        .join('');
    } else {
      let message = input.toLowerCase().split("");
    let messageNoSpaces = message.filter((space) => space !== " ");
           let decodeString = "";
      if(messageNoSpaces.length%2 !==0){
        return false;
      }
      for(let i=0; i<message.length; i+=2 ){
        if(message[i]== " "){
          i--;
          decodeString += " ";
        }else{
          decodeString += decipher[message[i+1]][message[i]];
        }
      }
      return decodeString;
    
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

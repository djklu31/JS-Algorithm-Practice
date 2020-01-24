var alphabet = "abcdefghijklmnopqrstuvwxyz";

function findLetter(char) {
  for (let i = 0; i < alphabet.length; i++) {
    if (char.toLowerCase() === alphabet[i]) {
      return i;
    }
  }
  return null;
}

function caeserCipher(string, adjust) {
  let array = [string.length];

  for (let i = 0; i < string.length; i++) {
    let index = findLetter(string.charAt(i));
    index += adjust || 0;
    console.log(adjust);

    console.log(index);

    if (index > alphabet.length - 1) {
      let compensate = index % alphabet.length;
      index = Math.abs(compensate);
    } else if (index < 0) {
      let compensate = alphabet.length + (index % alphabet.length);
      index = compensate;
    }

    console.log(index);

    array[i] = alphabet.charAt(index);
  }

  return array;
}

console.log(caeserCipher("aaaaaa", 0));

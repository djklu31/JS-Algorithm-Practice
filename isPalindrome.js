let isPalindrome = function(palindrome) {
  let leftIndex = 0;
  let rightIndex = palindrome.length - 1;

  while (leftIndex <= rightIndex) {
    if (palindrome[leftIndex] !== palindrome[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

console.log(isPalindrome(""));
isPalindrome("ssss");

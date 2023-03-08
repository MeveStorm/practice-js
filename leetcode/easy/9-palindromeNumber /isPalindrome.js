const isPalindrome = (num) => {
  const numStr = num.toString();
  return numStr === numStr.split('').reverse().join('');
};

export default isPalindrome;

const getCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const cb = (acc, char) => {
    let count = acc;
    if (vowels.includes(char)) count += 1;
    return count;
  };

  return str.split('').reduce(cb, 0);
};

export default getCount;

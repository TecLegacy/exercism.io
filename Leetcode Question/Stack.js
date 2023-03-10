let s = '()';
const isValid = s => {
  const stringValue = s.split('');
  let count = 0;
  let first = stringValue[count];
  let second = stringValue[count + 1];

  for (let i = 0; i < stringValue.length; i++) {
    console.log('reading');
    if (first === second) {
      first = stringValue[count + i];
      second = stringValue[count + 1];
      count++;
      console.log('s', first, second);
      return true;
    } else {
      return false;
    }
  }
};

isValid(s);

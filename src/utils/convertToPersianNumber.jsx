function convertToPersian(num, noSeparator) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const numString = num.toString();
  let result = '';

  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString.charAt(i));
    if (!isNaN(digit)) {
      result += persianDigits[digit];
    } else {
      result += numString.charAt(i);
    }

    if ((numString.length - i - 1) % 3 === 0 && i !== numString.length - 1) {
      if(!noSeparator) result += ',';
    }
  }

  return result;
}

export default convertToPersian;
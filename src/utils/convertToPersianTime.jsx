import moment from 'moment-jalaali';
import convertToPersianNumber from "./convertToPersianNumber";

const convertToPersianTime = (time) => {
  const persianTime = moment(time).format('jYYYY/jMM/jDD');

  return convertToPersianNumber(persianTime, true);
};

export default convertToPersianTime;
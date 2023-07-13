import { useState, useEffect } from 'react';
import convertToPersian from '../../utils/convertToPersianNumber';

function CountdownTimer({ duration }) {
  const [remainingTime, setRemainingTime] = useState(parseFloat(duration));

  useEffect(() => {
    if (remainingTime <= 0) return;

    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((remainingTime-hours*3600) / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');

  return (
    <div className='text-xs font-Yekan-bold text-[#ef394e]'>
    {convertToPersian(seconds)}: {convertToPersian(minutes)}: {convertToPersian(hours)}
    </div>
  )
}

export default CountdownTimer;
import React, { useEffect, useRef,useState } from 'react'
import './timer.css'
const Timer = () => {

  const[days,setDays] = useState('00');
  const[hours,setHours] = useState('00');
  const[minutes,setMinutes] = useState('00');
  const[seconds,setSeconds] = useState('00');

  let intervel = useRef();

  const startTimer= ()=>
  {
    const Target =  new Date("June 16, 2022 15:52:00").getTime();

    intervel = setInterval(()=>
    {
      const now = new Date().getTime();
      let distance = Target - now;
    var daysR = Math.floor(distance / (1000*60*60*24));
    var hoursR = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
    var minutesR = Math.floor((distance %(1000*60*60))/(1000*60));
    var secondsR = Math.floor((distance %(1000*60))/(1000));

    if(distance<0)
    {
      clearInterval(intervel.current);
    }
    else
    {
      setDays(daysR);
      setHours(hoursR);
      setMinutes(minutesR);
      setSeconds(secondsR);
    }
    

    },1000)
    
    
  };
  useEffect(()=>
  {
    startTimer();
    return ()=>
    {
      clearInterval(intervel.current);
    }
  })
    
  

  return (
    <div className='TimerContainer'>
        <section>
        <div className='days'>{days}</div>
        <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
        <div className='hours'>{hours}</div>
        <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
        <div className='minutes'>{minutes}</div>
        <p><small>Minutes</small></p>
        </section>
        <span>:</span>
        <section>
        <div className='seconds'>{seconds}</div>
        <p><small>Seconds</small></p>
        </section>
      

    </div>
  )
}

export default Timer;
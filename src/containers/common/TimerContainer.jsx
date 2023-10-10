import { useEffect, useState } from "react";
import Timer from "../../components/Timer";

const TimerContainer = ({time, setTime}) => {
    useEffect(() => {
        const endTime = Date.now() + time * 1000; // 종료 시간
        const timerInterval = setInterval(() => {
          const now = Date.now();
          const remainingTime = endTime - now;
    
          if (remainingTime <= 0) {
            clearInterval(timerInterval);
            localStorage.removeItem('timeLeft'); // 타이머 종료 시 localStorage 삭제
            // TODO: alert 띄우고 종료하기 -> 훅? function 사용해서 데이터 보내고 페이지 이동하기
            setTime(0);
          } else {
            setTime(Math.ceil(remainingTime / 1000));
            localStorage.setItem('timeLeft', Math.ceil(remainingTime / 1000));
          }
        }, 1000); // 1초마다 갱신
    
        return () => {
          clearInterval(timerInterval);
        };
      }, []);
    
    return <Timer time={time}/>
}

export default TimerContainer;
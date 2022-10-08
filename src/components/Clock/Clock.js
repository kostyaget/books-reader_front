function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock("countdown", deadline);

// new Date(year, month, date, hours, minutes, seconds, ms)
// import React, { useState, useRef, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
// import ExitModal from "../Modal/LateRead";
// const [showModal, setShowModal] = useState(false);
// const isShowModal = () => {
//   setShowModal(!showModal);
// };
// isShowModal();
// const nodeRef = useRef(null);
// {
//   days + hours + minutes + seconds <= 0 && (
//     <CSSTransition nodeRef={nodeRef} timeout={300} in={showModal} unmountOnExit>
//       <div ref={nodeRef}>
//         <ExitModal showModal={showModal} setShowModal={setShowModal} />
//       </div>
//     </CSSTransition>
//   );
// }

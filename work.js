function getDateComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));    
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));    
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerId = null;
    }


    start() {
        const startDate = this.targetDate;

        const timer_1 = document.querySelector(this.selector);

        const refs = {
            day: timer_1.querySelector('[data-value="days"]'),
            hour: timer_1.querySelector('[data-value="hours"]'),
            min: timer_1.querySelector('[data-value="mins"]'),
            sec: timer_1.querySelector('[data-value="secs"]'),
        }

        this.timerId = setInterval(() => {
            const currentDate = Date.now();
            const timeDiff = startDate - currentDate;
            const { days, hours, mins, secs } = getDateComponents(timeDiff);
        
            refs.day.textContent = days;
            refs.hour.textContent = hours;
            refs.min.textContent = mins;
            refs.sec.textContent = secs;         
          
           if (timeDiff <= 0) {
               clearInterval(this.timerId);
               timer_1.textContent = 'Акция завершена :(';
            };
       }, 1000);
 
    };

};

const countdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 29, 2021, 21:54:00'),
});

countdown.start();


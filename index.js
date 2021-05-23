class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    start() {
        const startDate = this.targetDate;

        setInterval(() => {
            const currentDate = Date.now();
            const timeDiff = startDate - currentDate;
            const { days, hours, mins, secs } = getDateComponents(timeDiff);

            const timer_1 = document.querySelector('#timer-1');
            const day = timer_1.querySelector('[data-value="days"]');
            day.textContent = days;
            const hour = document.querySelector('[data-value="hours"]');
            hour.textContent = hours;
            const min = document.querySelector('[data-value="mins"]');
            min.textContent = mins;
            const sec = document.querySelector('[data-value="secs"]');
            sec.textContent = secs;
            
        }, 1000);
    };
};

const countdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

countdown.start();

function getDateComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));    
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));    
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
}

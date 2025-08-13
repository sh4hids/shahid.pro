import { intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

function Timer() {
    const [time, setTime] = useState(Date.now());
    const startTime = new Date('2018-01-01').getTime();

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTime(Date.now());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const {
        years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
    } = intervalToDuration({
        start: startTime,
        end: time,
    });

    return (
        <p
            className="text-accent-0 pt-4 font-bold italic"
            suppressHydrationWarning
        >
            {`${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''} ${days} day${days > 1 ? 's' : ''} ${hours || 0} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${seconds > 1 ? 's' : ''}`}
            <span className="text-fg-2 text-xs not-italic">{` (to be exact)`}</span>
        </p>
    );
}

export default Timer;

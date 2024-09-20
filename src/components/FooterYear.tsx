import { useEffect, useState } from 'react';

function FooterYear() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <span>{year}</span>;
}

export default FooterYear;

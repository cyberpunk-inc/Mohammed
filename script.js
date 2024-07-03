document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const currentTime = new Date();
        const utcTime = currentTime.toUTCString();
        const currentDay = currentTime.toLocaleString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
        document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${currentDay}`;
    }

    updateTime();
    setInterval(updateTime, 1000);  
});
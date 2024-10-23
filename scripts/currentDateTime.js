document.addEventListener('DOMContentLoaded', function() {
    const dateTimeElement = document.getElementById('date-time');

    function displayDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        if (dateTimeElement) {
            dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
        }
    }

    setInterval(displayDateTime, 1000);
    displayDateTime(); // Call immediately to show time on load
});

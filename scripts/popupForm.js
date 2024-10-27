document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popupForm');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const closePopup = document.getElementById('closePopup');

    if (subscribeBtn && popup && closePopup) {
        subscribeBtn.addEventListener('click', function() {
            popup.style.display = "block";
        });

        closePopup.addEventListener('click', function() {
            popup.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    }
});

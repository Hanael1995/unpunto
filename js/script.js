document.addEventListener('DOMContentLoaded', () => {
    const centerPoint = document.getElementById('centerPoint');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    centerPoint.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
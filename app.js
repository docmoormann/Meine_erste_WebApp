let count = 0;
const counterElement = document.getElementById('counter');
const button = document.getElementById('click-btn');

button.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

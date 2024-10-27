function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#faebd7', '#7fffd4', '#f5f5dc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    const header = document.querySelector('header'); // Изменим переменную на header

    // Проверка, содержит ли header класс 'red'
    if (header.classList.contains('red')) {
        header.classList.remove('red');
    } else {
        header.classList.add('red');
    }
});


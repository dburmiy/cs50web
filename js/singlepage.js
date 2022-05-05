// Показати одну сторінку та приховати дві інші
function showPage(page) {

    // Сховати всі div:
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // Показати div, переданий у аргументі функції
    document.querySelector(`#${page}`).style.display = 'block';
}

// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function() {

    // Обрати всі кнопки
    document.querySelectorAll('button').forEach(button => {

        // Коли кнопку натиснуто, перейти на сторінку
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })
});
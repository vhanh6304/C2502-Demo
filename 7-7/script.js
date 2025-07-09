const mainTitle = document.getElementById('main-title');
mainTitle.innerText = 'Chào mừng bạn đến với khóa học JavaScript!';

const description = document.querySelector('.description');
description.innerHTML = 'Bạn sẽ học về <strong>DOM, Events</strong>';

const nameInput = document.getElementById('student-name');
const greetButton = document.getElementById('greet-button');
const greetingOutput = document.getElementById('greeting');

greetButton.addEventListener('click', () => {
    const studentName = nameInput.value;
    if (studentName.trim() !== '') {
        greetingOutput.innerText = `Xin chào, ${studentName}!`;
    } else {
        greetingOutput.innerText = 'Vui lòng nhập tên của bạn.';
    }
});

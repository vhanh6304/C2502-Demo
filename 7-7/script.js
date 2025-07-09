// 1. Truy cập tiêu đề #main-title và thay đổi nội dung bằng innerText
const mainTitle = document.getElementById('main-title');
mainTitle.innerText = 'Chào mừng bạn đến với khóa học JavaScript!';

// 2. Truy cập đoạn mô tả có class description và thay đổi HTML bằng innerHTML
// Sử dụng querySelector để chọn phần tử đầu tiên có class là 'description'
const description = document.querySelector('.description');
description.innerHTML = 'Bạn sẽ học về <strong>DOM, Events</strong>';

// 3. Xử lý sự kiện chào hỏi khi người dùng nhấp vào nút
const nameInput = document.getElementById('student-name');
const greetButton = document.getElementById('greet-button');
const greetingOutput = document.getElementById('greeting');

greetButton.addEventListener('click', () => {
    const studentName = nameInput.value;
    // Kiểm tra xem người dùng có nhập tên không để tránh lời chào trống
    if (studentName.trim() !== '') {
        greetingOutput.innerText = `Xin chào, ${studentName}!`;
    } else {
        greetingOutput.innerText = 'Vui lòng nhập tên của bạn.';
    }
});

// const students = [
//     {name: "a", score: 10},
//     {name: "b", score: 5},
//     {name: "c", score: 2}
// ];

// const highestScore = document.getElementById('highestScore')
// function highestScore() {
//     let max = 0;
//     let topStudent=null;

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].score > max) {
//             max = students[i].score;
//             topStudent = students[i];
//         }
//     }

//     return topStudent;
// }

// function examPasser() {
//     let pass=0;
//     for (let i=0; i<students.length; i++){
//         if (students[i].score >= 5) {
//             pass++;
//         }
//     }
//     return pass;
// }

// function underThree() {
//     let underThree=false;
//     for (let i=0; i<students.length; i++) {
//         if (students[i].score < 3) {
//             underThree = true;
//         }
//     }
//     return underThree;
// }








    $(document).ready(function () {
      console.log('jQuery is ready!');
    });

    const $userForm = $('#userForm');
    const $userTableBody = $('#userTableBody');

    $userForm.submit(function (event) {
      event.preventDefault();

      const name = $('#name').val();
      const age = $('#age').val();
      const gender = $('input[name="gender"]:checked').val();

      addUserToTable(name, age, gender);
      $userForm[0].reset();
    });
    
    let stt=0;

    function addUserToTable(name, age, gender) {
      const $row = $('<tr>');
      $row.append(`<td>${++stt}</td>`);
      $row.append(`<td>${name}</td>`);
      $row.append(`<td>${age}</td>`);
      $row.append(`<td>${gender}</td>`);
      const $deleteButton = $('<button>').text('Xoá').addClass('btn btn-danger btn-sm').click(function () {
        $row.remove();
        stt--;
      });
      const $deleteCell = $('<td>').append($deleteButton);
      $row.append($deleteCell);
      $userTableBody.append($row);
    }

    // Lắng nghe sự kiện 'input' trên ô lọc tuổi
    $('#ageFilter').on('input', function() {
      const maxAge = $(this).val();

      // Nếu ô lọc trống, hiển thị tất cả các hàng
      if (maxAge === '') {
        $userTableBody.find('tr').show();
        return;
      }

      const maxAgeNum = parseInt(maxAge, 10);

      // Lặp qua mỗi hàng trong bảng
      $userTableBody.find('tr').each(function() {
        const $row = $(this);
        const ageText = $row.find('td:nth-child(2)').text(); // Lấy nội dung text của cột thứ 2 (Tuổi)
        const age = parseInt(ageText, 10);

        // Nếu tuổi của người dùng nhỏ hơn hoặc bằng tuổi lọc thì hiển thị, ngược lại thì ẩn
        if (!isNaN(age) && age <= maxAgeNum) {
          $row.show();
        } else {
          $row.hide();
        }
      });
    });
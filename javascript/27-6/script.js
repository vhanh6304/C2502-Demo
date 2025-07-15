function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`Số ${num} là số chẵn!`);
    } else {
      reject(`Lỗi: Số ${num} là số lẻ!`);
    }
  });
}

const numbers = [2, 4, 7, 10];
const resultEl = document.getElementById("result");
const doneEl = document.getElementById("done");

const promises = numbers.map(num =>
  checkNumber(num)
    .then(msg => {
      const li = document.createElement("li");
      li.textContent = msg;
      li.className = "success";
      resultEl.appendChild(li);
      return msg;
    })
    .catch(err => {
      const li = document.createElement("li");
      li.textContent = err;
      li.className = "error";
      resultEl.appendChild(li);
      throw err;
    })
);

Promise.all(promises)
  .then(() => {
    console.log("Tất cả đều là số chẵn!");
  })
  .catch(() => {
    console.warn("Có ít nhất một số lẻ!");
  })
  .finally(() => {
    doneEl.textContent = "Đã hoàn tất việc kiểm tra!";
  });

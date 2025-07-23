const students = [
  { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
  { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
  { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
  { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
  { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];

console.log(" Tên và tuổi:");
students.forEach(student => {
  console.log(`${student.name} - ${student.age} tuổi`);
});

const avgScores = students.map(student => {
  const avg = student.scores.reduce((a, b) => a + b) / student.scores.length;
  return { name: student.name, avgScore: avg };
});
console.log(" Tên và điểm trung bình:", avgScores);

const goodStudents = avgScores.filter(s => s.avgScore >= 8);
console.log(" Học sinh giỏi (đtb >= 8):", goodStudents);

const firstOver17 = students.find(student => student.age >= 17);
console.log(" Học sinh đầu tiên >= 17 tuổi:", firstOver17);

const hasUnder5 = avgScores.some(s => s.avgScore < 5);
console.log(" Có học sinh điểm dưới 5 không?", hasUnder5);

const allOver15 = students.every(s => s.age >= 15);
console.log(" Tất cả học sinh >= 15 tuổi?", allOver15);

const classAvg = avgScores.reduce((sum, s) => sum + s.avgScore, 0) / avgScores.length;
console.log(" Điểm trung bình cả lớp:", classAvg.toFixed(2));
